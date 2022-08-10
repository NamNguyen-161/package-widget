import React from "react";
import { IEventResponse } from "../../components/types";
import { Divider } from "../../styles";
import { AvatarEvent, EventName, EventSubName, MainLogin } from "./styles";

export interface ILoginScreenProps {
  loading: boolean;
  event: IEventResponse;
}

export default function LoginScreen(props: ILoginScreenProps) {
  const { loading, event } = props;
  return (
    <MainLogin loading={loading}>
      <AvatarEvent avatar={event.avatar} />
      <Divider height={32} />
      <EventName>{event.name}</EventName>
      <Divider height={8} />
      <EventSubName>{event.subTitle}</EventSubName>
    </MainLogin>
  );
}
