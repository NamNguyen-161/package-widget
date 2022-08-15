import * as React from "react";
import useEvent from "../../components/hooks/useEvent";
import { ITicket } from "../../components/types";
import { Divider } from "../../styles";
import { AvatarEvent } from "../Login/styles";
import {
  CloseWidget,
  EventNamePaymentSuccess,
  EventSubNamePaymentSuccess,
  FooterPaymentSuccess,
  HeaderPaymentSuccess,
  TitleSuccessfully,
  WrapperPaymentSuccess,
} from "./styles";

export interface IPaymentSuccessProps {
  tickets: ITicket[];
  setOpenWidget: (status: boolean) => void;
}

const PaymentSuccess = (props: IPaymentSuccessProps) => {
  const { tickets, setOpenWidget } = props;
  const { event } = useEvent();

  const totalTicket = React.useCallback(() => {
    const total = tickets.reduce((acc, item) => {
      return acc + item.count;
    }, 0);
    return total > 0 ? true : false;
  }, [tickets]);

  return (
    <WrapperPaymentSuccess>
      <CloseWidget
        onClick={() => setOpenWidget(false)}
        color={event.secondColor}
      >
        X
      </CloseWidget>
      <HeaderPaymentSuccess>
        <AvatarEvent avatar={event.avatar} />
        <Divider height={16} />
        <EventNamePaymentSuccess>{event.name}</EventNamePaymentSuccess>
        <Divider height={4} />
        <EventSubNamePaymentSuccess>
          {event.subTitle}
        </EventSubNamePaymentSuccess>
      </HeaderPaymentSuccess>
      <TitleSuccessfully color={event.secondColor}>
        TICKET PURCHASE SUCCESSFUL
      </TitleSuccessfully>
      <FooterPaymentSuccess color={event.secondColor}>
        <p>
          The tickets {totalTicket() ? "are" : "is"} minted and send to your
          web3 wallet.
        </p>
        <Divider height={16} />
        <p>
          This NFT Ticket is created using the Ticketing Protocol of CHI
          Network. Create tickets for your Web3 event.
        </p>
      </FooterPaymentSuccess>
    </WrapperPaymentSuccess>
  );
};

export default React.memo(PaymentSuccess);
