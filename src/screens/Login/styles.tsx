import styled from "styled-components";
import IconEvent from "../../images/icon_event.png";
import { Text } from "../../styles";

export const MainLogin = styled.div`
  width: 100%;
  margin-top: 40px;
  font-family: "LR";
`;

export const AvatarEvent = styled.div`
  width: 56px;
  height: 56px;
  background: url(${IconEvent});
  border-radius: 50%;
  padding-top: 40px;
  margin: 0 auto;
`;

export const EventName = styled(Text)`
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  color: white;
  text-align: center;
`;

export const EventSubName = styled(EventName)`
  text-shadow: -1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff,
    -1px -1px 0 #fff;
  color: black;
`;
