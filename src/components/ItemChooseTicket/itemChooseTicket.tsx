import React, { memo, useState } from "react";
import {
  ButtonCountTicket,
  CircleButton,
  ExistingLabel,
  ExistingTicket,
  NumberTicket,
  WrapperAvatarTicket,
  WrapperInfoTicket,
  WrapperItemChooseTicket,
  TicketName,
  ExistingNumber,
} from "./styles";
import AvatarTicket from "../../images/avatar_ticket.png";
import { ITicket } from "../types";
import useEvent from "../hooks/useEvent";

export interface IItemChooseTicketProps {
  ticket: ITicket;
  increase: (id: number) => void;
  decrease: (id: number) => void;
}

const ItemChooseTicket = (props: IItemChooseTicketProps) => {
  const { ticket, increase, decrease } = props;
  const { event } = useEvent();

  return (
    <WrapperItemChooseTicket background={event.secondColor}>
      <WrapperAvatarTicket>
        <img src={ticket.image ? ticket.image : AvatarTicket} />
      </WrapperAvatarTicket>
      <WrapperInfoTicket>
        <TicketName color={event.tertiaryColor}>{ticket.name}</TicketName>
        <ExistingTicket>
          <ExistingLabel color={event.tertiaryColor}>
            Existing tickets:&nbsp;
          </ExistingLabel>
          <ExistingNumber color={event.tertiaryColor}>
            {ticket.amount}
          </ExistingNumber>
        </ExistingTicket>
      </WrapperInfoTicket>
      <ButtonCountTicket background={event.primaryColor}>
        <CircleButton
          color={event.tertiaryColor}
          background={event.secondColor}
          onClick={() => decrease(ticket.id)}
        >
          -
        </CircleButton>
        <NumberTicket color={event.tertiaryColor}>
          {ticket.maxCount}
        </NumberTicket>
        <CircleButton
          color={event.secondColor}
          background={event.primaryColor}
          onClick={() => increase(ticket.id)}
        >
          +
        </CircleButton>
      </ButtonCountTicket>
    </WrapperItemChooseTicket>
  );
};

export default memo(ItemChooseTicket);
