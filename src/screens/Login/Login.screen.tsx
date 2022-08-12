import React from "react";
import useEvent from "../../components/hooks/useEvent";
import useLoading from "../../components/hooks/useLoading";
import { IEventResponse } from "../../components/types";
import { Divider } from "../../styles";
import { AvatarEvent, EventName, EventSubName, MainLogin } from "./styles";

export interface ILoginScreenProps {}

export default function LoginScreen(props: ILoginScreenProps) {
  const { event } = useEvent();
  const { loading } = useLoading();

  return (
    <MainLogin loading={!loading && event ? false : true}>
      <AvatarEvent avatar={event.avatar} />
      <Divider height={32} />
      <EventName>{event.name}</EventName>
      <Divider height={8} />
      <EventSubName>{event.subTitle}</EventSubName>
    </MainLogin>
  );
}
