import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected } from "../../Wallet/connectors";
import { CustomButton } from "./styles";

export interface ButtonProps {
  label: string;
  action: () => void;
}

const Button = (props: ButtonProps) => {
  const { label, action } = props;
  // const { activate, library, account } = useWeb3React();

  // const connectMetamask = () => {
  //   console.log({ library, account });
  //   try {
  //     activate(injected, undefined, true);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <CustomButton background="#EA5284" color="#FFFFFF" onClick={() => action()}>
      {label}
    </CustomButton>
  );
};

export default Button;
