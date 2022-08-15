import styled from "styled-components";
import { EventName, EventSubName } from "../../components/Header/styles";
import { ColorStyle } from "../../components/types";
import { Text } from "../../styles";

export const WrapperPaymentSuccess = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  gap: 24px;
  justify-items: center;
  position: relative;
`;

export const HeaderPaymentSuccess = styled.div`
  padding-bottom: 24px;
`;

export const CloseWidget = styled.span<Omit<ColorStyle, "background">>`
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  top: 0;
  right: 0;
  cursor: pointer;
  color: ${(props) => props.color};
`;

export const EventNamePaymentSuccess = styled(EventName)`
  font-size: 24px;
  line-height: 29px;
  padding: 0px;
`;

export const EventSubNamePaymentSuccess = styled(EventSubName)`
  font-size: 14px;
  line-height: 17px;
  padding: 0px;
`;

export const TitleSuccessfully = styled(Text)<Omit<ColorStyle, "background">>`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${(props) => props.color};
`;

export const FooterPaymentSuccess = styled.div<Omit<ColorStyle, "background">>`
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: ${(props) => props.color};
  }
`;
