import React, { memo, useState } from "react";
import useEvent from "../../../components/hooks/useEvent";
import useTicket from "../../../components/hooks/useTicket";
import ItemChooseTicket from "../../../components/ItemChooseTicket";
import { ITicket } from "../../../components/types";
import { ListTicket } from "../../../styles";

export interface IChooseTicketScreenProps {
  increase: (id: number) => void;
  decrease: (id: number) => void;
  listTicket: ITicket[];
}

const ChooseTicketScreen = (props: IChooseTicketScreenProps) => {
  const { increase, decrease, listTicket } = props;
  const { event } = useEvent();
  return (
    <ListTicket background={event.primaryColor}>
      {listTicket.map((ticket, index) => (
        <ItemChooseTicket
          ticket={ticket}
          key={index}
          increase={increase}
          decrease={decrease}
        />
      ))}
    </ListTicket>
  );
};

export default memo(ChooseTicketScreen);
