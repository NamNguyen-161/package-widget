import { css } from "styled-components";
import red from "styled-components";

export const lighten = (value: number) => css`
  filter: brightness(${value + 1});
`;

export const darken = (value: number) => css`
  filter: brightness(${1 - value});
`;

export const hexToRgb = (hex: string, opacity: number) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgba(
        ${parseInt(result[1], 16)},
        ${parseInt(result[2], 16)},
        ${parseInt(result[3], 16)},
        ${opacity}
      )`
    : null;
};
