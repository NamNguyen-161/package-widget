import React, { useEffect, useMemo, useState } from "react";
import Button from "../Button/button";
import "../../styles/global.scss";
import { ContainerWidget, Footer } from "./styles";
import LoginScreen from "../../screens/Login/Login.screen";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../Wallet/connectors";
import { IWidgetTemplateProps } from "..";
import ChooseTicketScreen from "../../screens/ChooseTicket";

export default function Widget(props: IWidgetTemplateProps) {
  const { address, url } = props;
  const [step, setStep] = useState<number>(0);
  const { activate, account } = useWeb3React();

  useEffect(() => {
    account && setStep(1);
  }, [account]);

  const connectMetamask = () => {
    try {
      activate(injected, undefined, true);
    } catch (error) {
      console.error(error);
    }
  };

  const onNextStep = () => {
    console.log("next");
  };

  const renderButton = useMemo(() => {
    switch (step) {
      case 0:
        return <Button label="Connect Wallet" action={connectMetamask} />;
      case 1:
        return <Button label="Next: Checkout" action={onNextStep} />;
    }
  }, [step]);

  const renderScreen = useMemo(() => {
    switch (step) {
      case 0:
        return <LoginScreen />;
      case 1:
        return <ChooseTicketScreen />;
    }
  }, [step]);

  return (
    <ContainerWidget>
      {renderScreen}
      <Footer>{renderButton}</Footer>
    </ContainerWidget>
  );
}
