import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected } from "../../Wallet/connectors";
import { CustomButton } from "./styles";

export interface ButtonProps {
  label: string;
  action: () => void;
  background: string;
  color: string;
}

const Button = (props: ButtonProps) => {
  const { label, action, background, color } = props;
  return (
    <CustomButton
      background={background}
      color={color}
      onClick={() => action()}
    >
      {label}
    </CustomButton>
  );
};

export default Button;
