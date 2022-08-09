import styled from "styled-components";
import { ColorStyle } from "../components/types";

export interface IDividerProps {
  height: number;
}
export const Divider = styled.div<IDividerProps>`
  width: 100%;
  height: ${(props) => `${props.height}px`};
`;

export const Text = styled.div`
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`;

export const Label = styled.p<Omit<ColorStyle, "background">>`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => props.color};
`;

export const Main = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;
`;

export const ListTicket = styled.div`
  margin: 24px 0 0;
  display: grid;
  grid-template-rows: 1fr;
  gap: 16px;
  max-height: 250px;
  overflow-y: auto;

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
