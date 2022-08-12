import React, { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../Button/button";
import "../../styles/global.scss";
import { ContainerWidget, Footer, Spinner, Wrapper } from "./styles";
import LoginScreen from "../../screens/Login/Login.screen";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../Wallet/connectors";
import { IWidgetTemplateProps } from "..";
import TicketScreen from "../../screens/Ticket";
import useLoading from "../hooks/useLoading";
import useEvent from "../hooks/useEvent";
import useTicket from "../hooks/useTicket";

export default function Widget(props: IWidgetTemplateProps) {
  const { address, url, open } = props;
  const [step, setStep] = useState<number>(0);
  const { activate, account } = useWeb3React();
  const { loading } = useLoading();
  const { getEvent, event } = useEvent();
  const [disable, setDisable] = useState<boolean>(false);
  console.log({ disable });

  useEffect(() => {
    getEvent(url, address);
  }, [url, address]);

  useEffect(() => {
    account && event && setStep(1);
  }, [account, event]);

  const onChangeDisableBtn = (disable: boolean) => {
    console.log({ disable });
    setDisable(disable);
  };

  const connectMetamask = () => {
    try {
      activate(injected, undefined, true);
    } catch (error) {
      console.error(error);
    }
  };

  const onNextStep = useCallback(() => {
    setStep((preStep) => ++preStep);
  }, []);

  const renderButton = useMemo(() => {
    if (event) {
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
              disable={disable}
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
    }
  }, [step, event, disable]);

  const renderScreen = useMemo(() => {
    switch (step) {
      case 0:
        return <LoginScreen />;
      case 1:
      case 2:
        return (
          <TicketScreen
            step={step}
            setStep={setStep}
            onChangeDisableBtn={onChangeDisableBtn}
          />
        );
      default:
        return;
    }
  }, [step, event]);

  return (
    <Wrapper open={true}>
      <ContainerWidget
        loading={loading}
        background={
          event && (event.backgroundTitle || event.backgroundTitleColor)
        }
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
