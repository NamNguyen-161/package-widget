import { ethers } from "ethers";
import React, { createContext, FC, useCallback, useState } from "react";
import useLoading from "../components/hooks/useLoading";
import { IEventResponse } from "../components/types";
import { provider } from "../Wallet/connectors";
import EventFactory from "../abi/ChiNetworkEventFactory.json";
import ChiNetworkEvent from "../abi/ChiNetworkEvent.json";

const eventFactory = EventFactory.abi;
const chiNetworkEvent = ChiNetworkEvent.abi;

export interface IEventContext {
  getEvent: (url: string, address: string) => void;
  event: IEventResponse;
}

export const EventContext = createContext<IEventContext>({
  getEvent: (url: string, address: string) => ({}),
  event: {} as IEventResponse,
});

const EventProvider: FC<React.ReactNode> = ({ children }) => {
  const [event, setEvent] = useState<IEventResponse>({} as IEventResponse);
  const { hideLoading, showLoading } = useLoading();

  const getEvent = async (url: string, address: string) => {
    try {
      showLoading();
      const contractEventFactory = new ethers.Contract(
        address,
        eventFactory,
        provider
      );
      const addressEvent = await contractEventFactory.eventsUrl(url);
      await onGetInfoEvent(addressEvent);
      hideLoading();
      return addressEvent;
    } catch (error) {
      hideLoading();
      console.log(error);
    }
  };

  const onGetInfoEvent = async (address: string) => {
    const event = new ethers.Contract(address, chiNetworkEvent, provider);
    try {
      const info = await event.info();
      const customStyle = await event.style();
      const data = {
        avatar: info.avatar,
        background: info.background,
        description: info.description,
        endTime: info.endTime,
        name: info.name,
        startTime: info.startTime,
        url: info.url,
        subTitle: info.subTitle,
        avatarColor: customStyle.avatarColor,
        backgroundColor: customStyle.backgroundColor,
        backgroundTitle: customStyle.backgroundTitle,
        backgroundTitleColor: customStyle.backgroundTitleColor,
        css: customStyle.css,
        primaryColor: customStyle.primaryColor,
        secondColor: customStyle.secondColor,
        subTitleFont: customStyle.subTitleFont,
        tertiaryColor: customStyle.tertiary,
        titleFont: customStyle.titleFont,
        address,
      };
      setEvent(data);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    event: event,
    getEvent: useCallback(
      (url: string, address: string) => getEvent(url, address),
      []
    ),
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};

export default React.memo(EventProvider);
