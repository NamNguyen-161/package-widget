import React from "react";
import ItemMintTicket from "../../../components/ItemMintTicket";
import { Divider } from "../../../styles";
import { WrapperMinTicket } from "./styles";
import TermAndConditional from "../../../components/TermCondition";

export interface IMinTicketScreenProps {}

export default function MinTicketScreen(props: IMinTicketScreenProps) {
  return (
    <>
      <WrapperMinTicket color="black" background="white">
        <ItemMintTicket />
        <ItemMintTicket />
        <ItemMintTicket />
        <ItemMintTicket />
        <ItemMintTicket />
        <ItemMintTicket />
        <ItemMintTicket />
      </WrapperMinTicket>
      <Divider height={24} />
      <TermAndConditional />
    </>
  );
}
