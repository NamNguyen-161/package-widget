import React, { memo } from "react";
import styled from "styled-components";

interface ICheckbox {
  checked: boolean;
  background: string;
  color: string;
}

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
`;

const Icon = styled.svg`
  fill: none;
  stroke-width: 4px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<ICheckbox>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.checked ? props.background : "white")};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
    stroke: ${(props) => props.color};
  }
`;

const Checkbox = (props: ICheckbox & { onChange: () => void }) => {
  const { checked, onChange, color, background } = props;
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} />
      <StyledCheckbox
        checked={checked}
        color={color}
        background={background}
        onClick={() => onChange()}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="18 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default memo(Checkbox);
