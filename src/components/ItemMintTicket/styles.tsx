import styled from "styled-components";
import { Text } from "../../styles";
import { darken, hexToRgb } from "../../utils/helper";
import { ColorStyle } from "../types";

export const MintTicketComponent = styled.div`
  height: 32px;
  display: grid;
  grid-template-columns: 50px 1fr 16px;
  padding: 4px 0px;
  align-items: center;
  gap: 12px;
`;

export const NameMintTicket = styled(Text)`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  display: -webkit-box;
`;

export const Icon = styled.div`
  cursor: pointer;
  width: fit-content;
`;

export const CustomSelect = styled.select<ColorStyle>`
  border-radius: 100px;
  padding: 4px 8px;
  width: 100%;
  color: ${(props) => props.color};
  background: ${(props) => hexToRgb(props.background, 0.18)};
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-family: "LR";
  cursor: pointer;
`;

export const PositionDropdown = styled.div`
  position: absolute;
  right: 8px;
  bottom: 50%;
  transform: translateY(calc(50% - 2px));
  pointer-events: none;
`;
