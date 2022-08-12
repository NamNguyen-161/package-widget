import styled from "styled-components";
import { Text } from "../../styles";
import { ColorStyle } from "../types";

interface HeaderProps {
  isBack?: boolean;
}
export const Header = styled.div<HeaderProps>`
  display: grid;
  grid-template-columns: ${(props) => (props?.isBack ? "96px" : "56px")} 1fr;
  gap: 16px;
  align-items: center;
`;

export const Image = styled.div<Omit<ColorStyle, "color">>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  background: ${(props) => props.background || "none"};

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;

export const EventName = styled(Text)`
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  padding-right: 10px;
`;

export const EventSubName = styled(Text)`
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  text-shadow: -1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff,
    -1px -1px 0 #fff;
  color: black;
  padding-left: 2px;
  padding-right: 10px;
`;
