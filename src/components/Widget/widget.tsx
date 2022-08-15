import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
import { EEnableBtn, ITicket } from "../types";
import { ethers } from "ethers";
import ChiNetworkEvent from "../../abi/ChiNetworkEvent.json";
import PaymentSuccess from "../../screens/PaymentSuccess";

const chiNetworkAbi = ChiNetworkEvent.abi;

export default function Widget(props: IWidgetTemplateProps) {
  const { address, url, open } = props;
  const { activate, account, library } = useWeb3React();
  const { loading, hideLoading, showLoading } = useLoading();
  const { getEvent, event } = useEvent();
  const refTickets = useRef<ITicket[]>([]);
  const [step, setStep] = useState<number>(0);
  const [openWidget, setOpenWidget] = useState<boolean>(open);
  const [enableBtn, setEnableBtn] = useState<{
    checkout: boolean;
    minTickets: boolean;
  }>({
    checkout: false,
    minTickets: false,
  });

  useEffect(() => {
    getEvent(url, address);
  }, [url, address]);

  useEffect(() => {
    account && event && setStep(1);
  }, [account, event]);

  const onChangeEnableBtn = (enable: boolean, type: EEnableBtn) => {
    if (type === EEnableBtn.CHECKOUT) {
      return setEnableBtn({ ...enableBtn, checkout: enable });
    }
    return setEnableBtn({ ...enableBtn, minTickets: enable });
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

  const getMintTicket = (data: ITicket[]) => {
    refTickets.current = data;
  };

  const listIdTicket = () => {
    const array = refTickets.current.reduce((acc: number[], item: ITicket) => {
      if (item.count > 0) {
        acc.push(item.id);
      }
      return acc;
    }, []);
    return array;
  };

  const listAmountTicket = () => {
    const array = refTickets.current.reduce((acc: number[], item: ITicket) => {
      if (item.count > 0) {
        acc.push(item.count);
      }
      return acc;
    }, []);
    return array;
  };

  const onMintTicket = async () => {
    if (library) {
      showLoading();
      const listId = listIdTicket();
      const listAmount = listAmountTicket();
      const provider = library;
      const signer = provider.getSigner();
      const ticketContract = new ethers.Contract(
        event.address,
        chiNetworkAbi,
        signer
      );
      const estimateGas = await ticketContract.estimateGas.mintTicket(
        listId,
        listAmount
      );
      try {
        let txn = await ticketContract.mintTicket(listId, listAmount, {
          gasLimit: estimateGas,
        });
        await txn.wait();
        hideLoading();
        onNextStep();
      } catch (error) {
        console.log(error);
        hideLoading();
      }
    } else {
      hideLoading();
    }
  };

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
              disable={enableBtn.checkout}
            />
          );
        case 2:
          return (
            <Button
              label="Mint tickets"
              action={onMintTicket}
              background={event.primaryColor}
              color={event.secondColor}
              disable={!enableBtn.minTickets}
            />
          );
      }
    }
  }, [step, event, enableBtn]);

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
            onChangeEnableBtn={onChangeEnableBtn}
            enableMintTicket={enableBtn.minTickets}
            getMintTicket={getMintTicket}
          />
        );
      case 3:
        return (
          <PaymentSuccess
            tickets={refTickets.current}
            setOpenWidget={setOpenWidget}
          />
        );
      default:
        return;
    }
  }, [step, event, enableBtn]);

  return (
    <Wrapper open={openWidget}>
      <ContainerWidget
        loading={loading ? 1 : 0}
        background={
          event && (event.backgroundTitle || event.backgroundTitleColor)
        }
      >
        {loading && <Spinner />}
        {renderScreen}
        <Footer loading={loading && step === 0 ? 1 : 0}>{renderButton}</Footer>
      </ContainerWidget>
    </Wrapper>
  );
}
