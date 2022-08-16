import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import React from "react";
import Widget from "./Widget/widget";
import EventProvider from "../contexts/event";
import LoadingProvider from "../contexts/loading";
import TicketProvider from "../contexts/ticket";
import { GlobalStyle } from "../styles";

export interface IWidgetTemplateProps {
  address: string;
  url: string;
  open: boolean;
}

const getLibrary = (provider: any) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
};

export default function ChiWidget(props: IWidgetTemplateProps) {
  const { url, address, open } = props;
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <LoadingProvider>
        <EventProvider>
          <TicketProvider>
            <GlobalStyle />
            <Widget url={url} address={address} open={open} />
          </TicketProvider>
        </EventProvider>
      </LoadingProvider>
    </Web3ReactProvider>
  );
}
