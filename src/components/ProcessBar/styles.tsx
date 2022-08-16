import styled from "styled-components";

export interface TextProcessProps {
  accomplished: boolean;
  color: string;
}
export const TextProcess = styled.p<TextProcessProps>`
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 12px;
  opacity: ${(props) => (props.accomplished ? "1" : "0.4")};
  color: ${(props) => props.color};
`;

export interface CircleIndexProcessProps {
  accomplished: boolean;
  secondColor: string;
  primaryColor: string;
}
export const CircleIndexProcess = styled.div<CircleIndexProcessProps>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.secondColor};
  border: ${(props) =>
    props.accomplished ? "none" : `3px solid ${props.primaryColor}`};
  background-color: ${(props) =>
    props.accomplished ? props.primaryColor : "#000000"};
`;
