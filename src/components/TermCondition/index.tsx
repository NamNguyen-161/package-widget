import React, { memo, useState } from "react";
import Checkbox from "../Checkbox";
import useEvent from "../hooks/useEvent";
import { TermAndCondition, TextTermAndCondition } from "./styles";

export interface ITermAndConditionalProps {}

const TermAndConditional = (props: ITermAndConditionalProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const { event } = useEvent();

  const onChange = () => {
    setChecked(!checked);
  };

  return (
    <TermAndCondition>
      <Checkbox
        checked={checked}
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
