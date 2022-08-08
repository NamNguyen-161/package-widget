import BackgroundTicket from "../../images/background_ticket.png";

import styled from "styled-components";

export const ContainerWidget = styled.div`
  width: 416px;
  min-height: 474px;
  border: 8px solid #ffffff;
  filter: drop-shadow(0px 40px 120px rgba(234, 82, 132, 0.4));
  border-radius: 48px;
  padding: 24px;
  box-sizing: border-box;
  background: url(${BackgroundTicket});
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2147483647;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
`;
