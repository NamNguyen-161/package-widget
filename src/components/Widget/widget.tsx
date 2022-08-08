import React, { useEffect } from "react";
import Button from "../Button/button";
import "../../styles/global.scss";
import { ContainerWidget, Footer } from "./styles";
import LoginScreen from "../../screens/Login/Login.screen";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

export interface IWidgetProps {}

const getLibrary = (provider: any) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

export default function Widget(props: IWidgetProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ContainerWidget>
        <LoginScreen />
        <Footer>
          <Button label="Connect Wallet" />
        </Footer>
      </ContainerWidget>
    </Web3ReactProvider>
  );
}
