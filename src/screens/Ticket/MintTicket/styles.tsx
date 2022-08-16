import styled from "styled-components";
import { ColorStyle } from "../../../components/types";
import parse from "parse-color";

const background = (color: string) => {
  const { rgb } = parse(color);
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]},0.6)`;
};

export const WrapperMinTicket = styled.div<
  ColorStyle & { primaryColor: string }
>`
  width: 100%;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: 16px;
  border-radius: 8px;
  margin-top: 24px;
  max-height: 250px;
  overflow-y: auto;
  display: grid;
  grid-template-rows: 1fr;
  gap: 16px;

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 14px 14px transparent;
    border: solid 4px transparent;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 14px 14px ${(props) => background(props.primaryColor)};
    border: solid 4px transparent;
    border-radius: 14px;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`;
