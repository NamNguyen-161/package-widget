import React, { memo, useCallback, useMemo } from "react";
import IconEvent from "../../images/icon_event.png";
import { IIconSvg } from "../ItemMintTicket";
import { Icon } from "../ItemMintTicket/styles";
import { IEventResponse } from "../types";
import { EventName, EventSubName, Header, Image, Name } from "./styles";

const IconArrowBack = ({ stroke }: Omit<IIconSvg, "fill">) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.57 5.92999L3.5 12L9.57 18.07"
        stroke={stroke}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4999 12H3.66992"
        stroke={stroke}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export interface IHeaderProps {
  step: number;
  setStep: (step: number) => void;
  event: IEventResponse;
}

const HeaderStyled = (props: IHeaderProps) => {
  const { step, setStep, event } = props;

  const isBack = useCallback(() => {
    return step === 2 ? true : false;
  }, [step]);

  const handleBack = useCallback(() => {
    setStep(step - 1);
  }, [step]);

  const renderImage = useMemo(() => {
    if (event.avatar) {
      if (event.avatar.includes("https")) {
        return <img src={event.avatar} />;
      }
      return null;
    }
    return <img src={IconEvent} />;
  }, [event]);

  return (
    <Header isBack={isBack()}>
      <Image
        background={
          event.avatar && !event.avatar.includes("https") ? event.avatar : ""
        }
      >
        {isBack() && (
          <Icon onClick={() => handleBack()}>
            <IconArrowBack stroke={event.secondColor} />
          </Icon>
        )}
        {renderImage}
      </Image>
      <Name>
        <EventName>{event.name}</EventName>
        <EventSubName>{event.subTitle}</EventSubName>
      </Name>
    </Header>
  );
};

export default memo(HeaderStyled);
