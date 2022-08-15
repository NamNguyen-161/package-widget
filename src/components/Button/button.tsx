import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected } from "../../Wallet/connectors";
import { CustomButton } from "./styles";

export interface ButtonProps {
  label: string;
  action: () => void | Promise<void>;
  background: string;
  color: string;
  disable?: boolean;
}

const Button = (props: ButtonProps) => {
  const { label, action, background, color, disable } = props;
  return (
    <CustomButton
      background={background}
      color={color}
      onClick={() => action()}
      disabled={disable || false}
    >
      {label}
    </CustomButton>
  );
};

export default Button;
