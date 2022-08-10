import styled from "styled-components";
import IconEvent from "../../images/icon_event.png";
import { Text } from "../../styles";

export const MainLogin = styled.div<{ loading: boolean }>`
  width: 100%;
  margin-top: 40px;
  font-family: "LR";
  display: ${(props) => (props.loading ? "none" : "block")};
`;

export const AvatarEvent = styled.div<{ avatar?: string }>`
  width: 56px;
  height: 56px;
  background: ${(props) =>
    !props.avatar
      ? `url(${IconEvent})`
      : props.avatar.includes("https")
      ? `url(${props.avatar})`
      : props.avatar};
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
