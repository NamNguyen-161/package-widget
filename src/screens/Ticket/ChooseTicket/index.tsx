import * as React from "react";
import ItemChooseTicket from "../../../components/ItemChooseTicket";
import { ListTicket } from "../../../styles";

export interface IChooseTicketScreenProps {}

export default function ChooseTicketScreen(props: IChooseTicketScreenProps) {
  return (
    <ListTicket>
      <ItemChooseTicket />
      <ItemChooseTicket />
      <ItemChooseTicket />
      <ItemChooseTicket />
      <ItemChooseTicket />
    </ListTicket>
  );
}
