import { css } from "styled-components";

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

export function getSafePercent(percent: number) {
  if (percent > 100 || percent < 0 || typeof percent !== "number") {
    console.warn(
      `[react-step-progress-bar]: The value passed to percent or position needs to be a number between 0 and 100 (passed value: ${percent}).`
    );
  }
  return Math.min(100, Math.max(percent, 0));
}

export function getStepPosition(
  steps: number,
  stepIndex: number,
  hasStepZero: boolean
) {
  if (hasStepZero) {
    return (100 / (steps - 1)) * stepIndex;
  }
  return (100 / steps) * (stepIndex + 1);
}

export const parseColor = (input: string) => {
  if (input.substr(0, 1) == "#") {
    var collen = (input.length - 1) / 3;
    var fact = [17, 1, 0.062272][collen - 1];
    return [
      Math.round(parseInt(input.substr(1, collen), 16) * fact),
      Math.round(parseInt(input.substr(1 + collen, collen), 16) * fact),
      Math.round(parseInt(input.substr(1 + 2 * collen, collen), 16) * fact),
    ];
  } else
    return input
      .split("(")[1]
      .split(")")[0]
      .split(",")
      .map((x) => +x);
};
