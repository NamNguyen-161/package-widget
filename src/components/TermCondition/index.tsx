import React, { memo } from "react";
import useEvent from "../hooks/useEvent";
import { TextTermAndCondition } from "./styles";

export interface ITermAndConditionalProps {}

const TermAndConditional = (props: ITermAndConditionalProps) => {
  const { event } = useEvent();

  return (
    <TextTermAndCondition
      dangerouslySetInnerHTML={{
        __html:
          "The CHI Ticketing Protocol and the interface are developed by the CHI Network DAO. By minting a ticket you agree to the terms and conditions of CHI Network. Visit the website of to issuer for possible additional terms and conditions",
      }}
      color={event.secondColor}
    />
  );
};

export default memo(TermAndConditional);
