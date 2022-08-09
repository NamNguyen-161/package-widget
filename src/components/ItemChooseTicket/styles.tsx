import styled from "styled-components";
import { darken } from "../../utils/helper";
import { ColorStyle } from "../types";

export const WrapperItemChooseTicket = styled.div`
  width: 100%;
  border-radius: 8px;
  background: #ffffff;
  padding: 16px;
  display: grid;
  grid-template-columns: 32px 1fr 92px;
  gap: 12px;
`;

export const WrapperAvatarTicket = styled.div<Omit<ColorStyle, "color">>`
  width: 100%;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => props.background};

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const WrapperInfoTicket = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  gap: 4px;
`;

export const ButtonCountTicket = styled.div<Omit<ColorStyle, "color">>`
  width: 100%;
  height: 32px;
  padding: 4px;
  border-radius: 100px;
  background: ${(props) => props.background};
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  gap: 5px;
  text-align: center;
`;

export const NumberTicket = styled.div<Omit<ColorStyle, "background">>`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.color};
`;

export const CircleButton = styled(NumberTicket)<ColorStyle>`
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  width: 100%;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s easy;
  user-select: none;

  &:hover {
    ${darken(0.05)}
  }
`;

export const ExistingTicket = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: inline-block;
`;

export const ExistingLabel = styled(ExistingTicket)<
  Omit<ColorStyle, "background">
>`
  color: ${(props) => props.color};
  opacity: 0.6;
`;

export const TicketName = styled.p<Omit<ColorStyle, "background">>`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ExistingNumber = styled(ExistingTicket)`
  opacity: 1;
  font-weight: bold;
`;
