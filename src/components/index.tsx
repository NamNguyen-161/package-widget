import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import React from "react";
import Widget from "./Widget/widget";

export interface IWidgetTemplateProps {
  address: string;
  url: string;
  open?: boolean;
}

const getLibrary = (provider: any) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

export default function WidgetTemplate(props: IWidgetTemplateProps) {
  const { url, address, open } = props;
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Widget url={url} address={address} open={open} />
    </Web3ReactProvider>
  );
}
