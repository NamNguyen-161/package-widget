import styled from "styled-components";
import { ColorStyle } from "../components/types";
import { createGlobalStyle } from "styled-components";
import FontLatoChi from "./fonts/LatoCHI-Regular.ttf";
import parse from "parse-color";

const background = (color: string) => {
  const { rgb } = parse(color);
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]},0.6)`;
};

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
  text-transform: uppercase;
  color: ${(props) => props.color};
  text-align: left;
`;

export const Main = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;
`;

export const ListTicket = styled.div<Omit<ColorStyle, "color">>`
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
    box-shadow: inset 0 0 14px 14px ${(props) => background(props.background)};
    border: solid 4px transparent;
    border-radius: 14px;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }
  @font-face {
    font-family: 'LR';
    src: url(${FontLatoChi}) format('truetype');
    font-style: normal;
  }
`;
