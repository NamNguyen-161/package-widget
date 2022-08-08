import React from "react";
import { Divider } from "../../styles";
import { AvatarEvent, EventName, EventSubName, MainLogin } from "./styles";

export interface ILoginScreenProps {}

export default function LoginScreen(props: ILoginScreenProps) {
  return (
    <MainLogin>
      <AvatarEvent />
      <Divider height={32} />
      <EventName>Event Name</EventName>
      <Divider height={8} />
      <EventSubName>Sub Name</EventSubName>
    </MainLogin>
  );
}
