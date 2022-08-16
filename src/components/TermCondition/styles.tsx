import styled from "styled-components";
import { ColorStyle } from "../types";

export const TextTermAndCondition = styled.div<Omit<ColorStyle, "background">>`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.color};
  text-align: left;
`;
