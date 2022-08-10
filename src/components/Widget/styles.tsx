import BackgroundTicket from "../../images/background_ticket.png";

import styled, { keyframes } from "styled-components";
import { darken } from "../../utils/helper";

export const ContainerWidget = styled.div<{
  loading: boolean;
  background?: string;
}>`
  font-family: "LR";
  width: 416px;
  min-height: 474px;
  border: 8px solid #ffffff;
  filter: drop-shadow(0px 40px 120px rgba(234, 82, 132, 0.4));
  border-radius: 48px;
  padding: 24px;
  box-sizing: border-box;
  background: ${(props) =>
    !props.background
      ? `url(${BackgroundTicket})`
      : props.background.includes("https")
      ? `url(${props.background})`
      : props.background};
  background-size: cover;
  background-repeat: no-repeat;
  margin: 200px auto;
  ${(props) => (props.loading ? darken(0.4) : darken(0))}
`;

export const RotateSpinner = keyframes`
   100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 6px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-top-color: #ea5284;
  opacity: 1;
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  width: 60px;
  height: 60px;
  transition: opacity 200ms;
  animation: ${RotateSpinner} 0.8s linear;
  animation-iteration-count: infinite;
  transition-delay: 200ms;
`;

export const Footer = styled.div<{ loading: boolean }>`
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
  display: ${(props) => (props.loading ? "none" : "block")};
`;

interface IWrapper {
  open?: boolean;
}
export const Wrapper = styled.div<IWrapper>`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.open ? "table-cell" : "none")};
  vertical-align: middle;
  position: fixed;
  top: 0;
  left: 0;
`;
