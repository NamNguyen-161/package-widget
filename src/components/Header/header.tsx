import * as React from "react";

import IconEvent from "../../images/icon_event.png";
import { EventName, EventSubName, Header, Image, Name } from "./styles";

export interface IHeaderProps {}

export default function HeaderStyled(props: IHeaderProps) {
  return (
    <Header>
      <Image>
        <img src={IconEvent} />
      </Image>
      <Name>
        <EventName>Event Name</EventName>
        <EventSubName>Event Title</EventSubName>
      </Name>
    </Header>
  );
}
