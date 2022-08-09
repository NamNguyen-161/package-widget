import React, { memo, useState } from "react";
import Checkbox from "../Checkbox";
import { TermAndCondition, TextTermAndCondition } from "./styles";

export interface ITermAndConditionalProps {}

const TermAndConditional = (props: ITermAndConditionalProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const onChange = () => {
    setChecked(!checked);
  };

  return (
    <TermAndCondition>
      <Checkbox
        checked={checked}
        onChange={onChange}
        color="white"
        background="#EA5284"
      ></Checkbox>
      <TextTermAndCondition
        dangerouslySetInnerHTML={{
          __html:
            "Please accept the terms & conditions of <u>CHI Network</u>. By accepting out terms & conditions, you also accept the terms & conditions of our vendors and partner(s): <u>Awakenings<u/>",
        }}
        color="white"
      />
    </TermAndCondition>
  );
};

export default memo(TermAndConditional);
