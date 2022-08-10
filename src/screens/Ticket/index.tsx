import React, { memo, useMemo } from "react";
import ProcessBar from "../../components/ProcessBar";
import { Label, Main } from "../../styles";
import { WrapperProcessBar } from "./styles";
import HeaderStyled from "../../components/Header";
import ChooseTicketScreen from "./ChooseTicket";
import MinTicketScreen from "./MintTicket";

export interface IChooseTicketScreenProps {
  step: number;
  setStep: (step: number) => void;
}

const TicketScreen = (props: IChooseTicketScreenProps) => {
  const { step, setStep } = props;

  const renderScreenTicket = useMemo(() => {
    switch (step) {
      case 1:
        return <ChooseTicketScreen />;
      case 2:
        return <MinTicketScreen />;
      default:
        return;
    }
  }, [step]);

  const renderLabelScreen = useMemo(() => {
    switch (step) {
      case 1:
        return <Label color="#FFFFFF">CHOOSE YOUR TICKET(S)</Label>;
      case 2:
        return <Label color="#FFFFFF">CHECKOUT</Label>;
      default:
        return;
    }
  }, [step]);

  return (
    <React.Fragment>
      <HeaderStyled step={step} setStep={setStep} />
      <WrapperProcessBar>
        <ProcessBar step={step} />
      </WrapperProcessBar>
      <Main>
        {renderLabelScreen}
        {renderScreenTicket}
      </Main>
    </React.Fragment>
  );
};
export default memo(TicketScreen);
