import React, { useEffect, useMemo, useState } from "react";
import Button from "../Button/button";
import "../../styles/global.scss";
import { ContainerWidget, Footer, Spinner, Wrapper } from "./styles";
import LoginScreen from "../../screens/Login/Login.screen";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../Wallet/connectors";
import { IWidgetTemplateProps } from "..";
import TicketScreen from "../../screens/Ticket";
import EventFactory from "../../abi/ChiNetworkEventFactory.json";
import ChiNetworkEvent from "../../abi/ChiNetworkEvent.json";
import { ethers } from "ethers";
import { IEventResponse } from "../types";

const eventFactory = EventFactory.abi;
const chiNetworkEvent = ChiNetworkEvent.abi;

export default function Widget(props: IWidgetTemplateProps) {
  const { address, url, open } = props;
  const [step, setStep] = useState<number>(0);
  const { activate, account } = useWeb3React();
  const [loading, setLoading] = useState<boolean>(true);
  const [event, setEvent] = useState<IEventResponse>({} as IEventResponse);

  console.log({ event });

  const provider = ethers.getDefaultProvider(3);

  useEffect(() => {
    account && setStep(1);
  }, [account]);

  useEffect(() => {
    fetchEvent();
    async function fetchEvent() {
      await onGetTicketEvent();
    }
  }, []);

  const onGetTicketEvent = async () => {
    await onGetAddressEventByUrl();
  };

  const onGetAddressEventByUrl = async () => {
    try {
      setLoading(true);
      const contractEventFactory = new ethers.Contract(
        address,
        eventFactory,
        provider
      );
      const addressEvent = await contractEventFactory.eventsUrl(url);
      await onGetInfoEvent(addressEvent);
      setLoading(false);
      return addressEvent;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const onGetInfoEvent = async (address: string) => {
    const event = new ethers.Contract(address, chiNetworkEvent, provider);
    try {
      const info = await event.info();
      const customStyle = await event.style();
      const data = {
        avatar: info.avatar,
        background: info.background,
        description: info.description,
        endTime: info.endTime,
        name: info.name,
        startTime: info.startTime,
        url: info.url,
        subTitle: info.subTitle,
        avatarColor: customStyle.avatarColor,
        backgroundColor: customStyle.backgroundColor,
        backgroundTitle: customStyle.backgroundTitle,
        backgroundTitleColor: customStyle.backgroundTitleColor,
        css: customStyle.css,
        primaryColor: customStyle.primaryColor,
        secondColor: customStyle.secondColor,
        subTitleFont: customStyle.subTitleFont,
        tertiaryColor: customStyle.tertiary,
        titleFont: customStyle.titleFont,
      };
      setEvent(data);
    } catch (error) {
      console.log(error);
    }
  };

  const connectMetamask = () => {
    try {
      activate(injected, undefined, true);
    } catch (error) {
      console.error(error);
    }
  };

  const onNextStep = () => {
    setStep((preStep) => ++preStep);
  };

  const renderButton = useMemo(() => {
    switch (step) {
      case 0:
        return (
          <Button
            label="Connect Wallet"
            background={event.primaryColor}
            color={event.secondColor}
            action={connectMetamask}
          />
        );
      case 1:
        return (
          <Button
            label="Next: Checkout"
            action={onNextStep}
            background={event.primaryColor}
            color={event.secondColor}
          />
        );
      case 2:
        return (
          <Button
            label="Mint tickets"
            action={onNextStep}
            background={event.primaryColor}
            color={event.secondColor}
          />
        );
    }
  }, [step, event]);

  const renderScreen = useMemo(() => {
    switch (step) {
      case 0:
        return <LoginScreen loading={loading} event={event} />;
      case 1:
      case 2:
        return <TicketScreen step={step} setStep={setStep} />;
      default:
        return;
    }
  }, [step, event]);

  return (
    <Wrapper open={true}>
      <ContainerWidget
        loading={loading}
        background={event.backgroundTitle || event.backgroundTitleColor}
      >
        {loading && <Spinner />}
        {renderScreen}
        <Footer loading={loading && step === 0 ? true : false}>
          {renderButton}
        </Footer>
      </ContainerWidget>
    </Wrapper>
  );
}
