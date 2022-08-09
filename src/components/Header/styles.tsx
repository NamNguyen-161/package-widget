import styled from "styled-components";
import { Text } from "../../styles";

export const Header = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 16px;
  align-items: center;
`;

export const Image = styled.div`
  img {
    width: 100%;
    height: 100%;
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
