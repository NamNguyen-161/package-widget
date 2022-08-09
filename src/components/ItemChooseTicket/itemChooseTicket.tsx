import React, { useState } from "react";
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

export interface IItemChooseTicketProps {}

export default function ItemChooseTicket(props: IItemChooseTicketProps) {
  const [number, setNumber] = useState<number>(0);
  const incrementTicket = () => {
    setNumber((preValue) => ++preValue);
  };
  const decrementTicket = () => {
    setNumber((preValue) => (preValue === 0 ? 0 : --preValue));
  };

  return (
    <WrapperItemChooseTicket>
      <WrapperAvatarTicket background="#FFFFFF">
        <img src={AvatarTicket} />
      </WrapperAvatarTicket>
      <WrapperInfoTicket>
        <TicketName color="#000000">
          Event Name Event Name Event Name Event Name Event Name Event Name
          Event Name Event Name
        </TicketName>
        <ExistingTicket>
          <ExistingLabel color="#000000">Existing tickets:&nbsp;</ExistingLabel>
          <ExistingNumber>99</ExistingNumber>
        </ExistingTicket>
      </WrapperInfoTicket>
      <ButtonCountTicket background="rgba(234, 82, 132, 0.16)">
        <CircleButton
          color="#000000"
          background="#FFFFFF"
          onClick={decrementTicket}
        >
          -
        </CircleButton>
        <NumberTicket color="#000000">{number}</NumberTicket>
        <CircleButton
          color="#FFFFFF"
          background="#EA5284"
          onClick={incrementTicket}
        >
          +
        </CircleButton>
      </ButtonCountTicket>
    </WrapperItemChooseTicket>
  );
}
