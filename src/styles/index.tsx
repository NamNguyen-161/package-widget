import styled from "styled-components";

export interface IDividerProps {
  height: number;
}
export const Divider = styled.div<IDividerProps>`
  width: 100%;
  height: ${(props) => `${props.height}px`};
`;

export const Text = styled.div`
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`;
