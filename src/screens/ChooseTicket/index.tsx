import * as React from "react";
import { Header } from "../../components/Header/styles";
import ItemChooseTicket from "../../components/ItemChooseTicket";
import ProcessBar from "../../components/ProcessBar";
import { Label, ListTicket, Main } from "../../styles";
import { WrapperProcessBar } from "./styles";
import HeaderStyled from "../../components/Header";

export interface IChooseTicketScreenProps {}

export default function ChooseTicketScreen(props: IChooseTicketScreenProps) {
  return (
    <React.Fragment>
      <HeaderStyled />
      <WrapperProcessBar>
        <ProcessBar />
      </WrapperProcessBar>
      <Main>
        <Label color="#FFFFFF">CHOOSE YOUR TICKET(S)</Label>
        <ListTicket>
          <ItemChooseTicket />
          <ItemChooseTicket />
          <ItemChooseTicket />
          <ItemChooseTicket />
          <ItemChooseTicket />
        </ListTicket>
      </Main>
    </React.Fragment>
  );
}
