import React, { memo, useEffect, useMemo, useState } from "react";
import ProcessBar from "../../components/ProcessBar";
import { Label, Main } from "../../styles";
import { WrapperProcessBar } from "./styles";
import HeaderStyled from "../../components/Header";
import ChooseTicketScreen from "./ChooseTicket";
import MinTicketScreen from "./MintTicket";
import { EEnableBtn, ITicket } from "../../components/types";
import useEvent from "../../components/hooks/useEvent";
import useTicket from "../../components/hooks/useTicket";

export interface IChooseTicketScreenProps {
  step: number;
  setStep: (step: number) => void;
  onChangeEnableBtn: (enable: boolean) => void;
  getMintTicket: (data: ITicket[]) => void;
}

const TicketScreen = (props: IChooseTicketScreenProps) => {
  const { step, setStep, onChangeEnableBtn, getMintTicket } = props;
  const { event } = useEvent();
  const { tickets } = useTicket();
  const [listTicket, setListTicket] = useState<ITicket[]>(tickets);

  useEffect(() => {
    const total = listTicket.reduce((acc: number, item: ITicket) => {
      return acc + item.maxCount;
    }, 0);
    onChangeEnableBtn(total > 0 ? false : true);
  }, [listTicket]);

  useEffect(() => {
    setListTicket(tickets);
  }, [tickets]);

  const increase = (id: number) => {
    const ticket = listTicket.map((item) => {
      if (item.id === id) {
        const maxCount =
          item.amount === item.maxCount ? item.amount : item.maxCount + 1;
        return {
          ...item,
          maxCount,
          count: maxCount,
        };
      }
      return { ...item };
    });
    setListTicket(ticket);
  };

  const decrease = (id: number) => {
    const ticket = listTicket.map((item) => {
      if (item.id === id) {
        const maxCount = item.maxCount > 0 ? item.maxCount - 1 : 0;
        return {
          ...item,
          maxCount,
          count: maxCount,
        };
      }
      return { ...item };
    });
    setListTicket(ticket);
  };

  const onBackStep = (step: number) => {
    setStep(step);
  };

  const renderScreenTicket = useMemo(() => {
    switch (step) {
      case 1:
        return (
          <ChooseTicketScreen
            listTicket={listTicket}
            increase={increase}
            decrease={decrease}
          />
        );
      case 2:
        return (
          <MinTicketScreen
            listTicket={listTicket}
            onBackStep={onBackStep}
            getMintTicket={getMintTicket}
          />
        );
      default:
        return;
    }
  }, [step, listTicket]);

  const renderLabelScreen = useMemo(() => {
    switch (step) {
      case 1:
        return <Label color={event.secondColor}>CHOOSE YOUR TICKET(S)</Label>;
      case 2:
        return <Label color={event.secondColor}>CHECKOUT</Label>;
      default:
        return;
    }
  }, [step]);

  return (
    <React.Fragment>
      <HeaderStyled step={step} setStep={setStep} event={event} />
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
