import React, { memo, useState } from "react";
import Checkbox from "../Checkbox";
import useEvent from "../hooks/useEvent";
import { TermAndCondition, TextTermAndCondition } from "./styles";

export interface ITermAndConditionalProps {
  onChangeEnableMintTicket: (enable: boolean) => void;
  enableMintTicket: boolean;
}

const TermAndConditional = (props: ITermAndConditionalProps) => {
  const { onChangeEnableMintTicket, enableMintTicket } = props;
  const { event } = useEvent();

  const onChange = () => {
    onChangeEnableMintTicket(!enableMintTicket);
  };

  return (
    <TermAndCondition>
      <Checkbox
        checked={enableMintTicket}
        onChange={onChange}
        color={event.secondColor}
        background={event.primaryColor}
      ></Checkbox>
      <TextTermAndCondition
        dangerouslySetInnerHTML={{
          __html:
            "Please accept the terms & conditions of <u>CHI Network</u>. By accepting out terms & conditions, you also accept the terms & conditions of our vendors and partner(s): <u>Awakenings<u/>",
        }}
        color={event.secondColor}
      />
    </TermAndCondition>
  );
};

export default memo(TermAndConditional);
