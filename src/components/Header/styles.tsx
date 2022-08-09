import styled from "styled-components";
import { Text } from "../../styles";

interface HeaderProps {
  isBack?: boolean;
}
export const Header = styled.div<HeaderProps>`
  display: grid;
  grid-template-columns: ${(props) => (props?.isBack ? "96px" : "56px")} 1fr;
  gap: 16px;
  align-items: center;
`;

export const Image = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;

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
`;

export const EventName = styled(Text)`
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
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
`;
