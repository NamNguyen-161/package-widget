import React from "react";
import styled from "styled-components";
import { darken } from "../../utils/helper";
import { ColorStyle } from "../../utils/types";

export const CustomButton = styled.button<ColorStyle>`
  width: 100%;
  padding: 17px;
  background: ${(props) => `${props.background}`};
  border-radius: 24px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${(props) => `${props.color}`};
  cursor: pointer;
  border: none;
  transition: all 0.2s;

  &:disabled {
    ${darken(0.5)}
    &:hover {
      ${darken(0.5)}
    }
  }

  &:hover {
    ${darken(0.1)}
  }
`;
