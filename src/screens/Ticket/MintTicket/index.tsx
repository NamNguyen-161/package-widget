import React, { memo, useCallback } from "react";
import ItemMintTicket from "../../../components/ItemMintTicket";
import { Divider } from "../../../styles";
import { WrapperMinTicket } from "./styles";
import TermAndConditional from "../../../components/TermCondition";
import { ITicket } from "../../../components/types";
import useEvent from "../../../components/hooks/useEvent";

export interface IMinTicketScreenProps {
  onChangeMintTicket: (id: number, count: number) => void;
  listTicket: ITicket[];
}

const MinTicketScreen = (props: IMinTicketScreenProps) => {
  const { listTicket, onChangeMintTicket } = props;
  const { event } = useEvent();

  const listMintTicket = useCallback(() => {
    const array = listTicket.filter((item) => item.maxCount > 0);
    return array;
  }, [listTicket]);

  return (
    <>
      <WrapperMinTicket
        color={event.tertiaryColor}
        background={event.secondColor}
      >
        {listMintTicket().map((ticket, index) => (
          <ItemMintTicket
            ticket={ticket}
            key={index}
            onChangeMintTicket={onChangeMintTicket}
          />
        ))}
      </WrapperMinTicket>
      <Divider height={24} />
      <TermAndConditional />
    </>
  );
};

export default memo(MinTicketScreen);
