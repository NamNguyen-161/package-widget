import styled from "styled-components";
import { ColorStyle } from "../../../components/types";

export const WrapperMinTicket = styled.div<ColorStyle>`
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
    box-shadow: inset 0 0 14px 14px rgba(234, 82, 132, 0.75);
    border: solid 4px transparent;
    border-radius: 14px;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`;
