import styled from "styled-components";
import { ColorStyle } from "../types";

export const TermAndCondition = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 15px;
`;

export const TextTermAndCondition = styled.div<Omit<ColorStyle, "background">>`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.color};
  text-align: left;
`;
