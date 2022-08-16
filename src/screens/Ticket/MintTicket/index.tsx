import React, { memo, useEffect, useState } from "react";
import ItemMintTicket from "../../../components/ItemMintTicket";
import { Divider } from "../../../styles";
import { WrapperMinTicket } from "./styles";
import TermAndConditional from "../../../components/TermCondition";
import { ITicket } from "../../../components/types";
import useEvent from "../../../components/hooks/useEvent";

export interface IMinTicketScreenProps {
  listTicket: ITicket[];
  onBackStep: (step: number) => void;
  getMintTicket: (data: ITicket[]) => void;
}

const MinTicketScreen = (props: IMinTicketScreenProps) => {
  const { listTicket, onBackStep, getMintTicket } = props;
  const { event } = useEvent();
  const [tickets, setTickets] = useState<ITicket[]>(listTicket);

  useEffect(() => {
    getMintTicket(tickets);
  }, [tickets]);

  useEffect(() => {
    const array = listTicket
      .filter((item) => item.maxCount > 0)
      .map((item) => ({
        ...item,
        count: item.maxCount,
      }));
    setTickets(array);
  }, [listTicket]);

  const onChangeMintTicket = (id: number, count: number) => {
    const newTickets = tickets.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count,
        };
      }
      return { ...item };
    });
    setTickets(newTickets);
    handleBackStep(newTickets);
  };

  const handleBackStep = (newTickets: ITicket[]) => {
    const total = newTickets.reduce((acc, item) => {
      return acc + item.count;
    }, 0);
    return total === 0 && onBackStep(1);
  };

  return (
    <React.Fragment>
      <WrapperMinTicket
        color={event.tertiaryColor}
        background={event.secondColor}
        primaryColor={event.primaryColor}
      >
        {tickets
          .filter((item) => item.count > 0)
          .map((ticket, index) => (
            <ItemMintTicket
              ticket={ticket}
              key={index}
              onChangeMintTicket={onChangeMintTicket}
            />
          ))}
      </WrapperMinTicket>
      <Divider height={24} />
      <TermAndConditional />
    </React.Fragment>
  );
};

export default memo(MinTicketScreen);
