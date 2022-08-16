import React from "react";
import { getSafePercent, getStepPosition } from "../../../utils/helper";
import { Step } from "../Step";
import "../processBar.scss";

type ProgressBarProps = {
  percent: number;
  children: React.ReactElement<typeof Step>[];
  stepPositions?: Array<number>;
  unfilledBackground: string;
  filledBackground: string;
  width?: number;
  height?: number;
  hasStepZero?: boolean;
  text?: string;
};

export class ProgressBar extends React.Component<ProgressBarProps> {
  render() {
    const {
      percent,
      children,
      stepPositions = [],
      unfilledBackground = undefined,
      filledBackground = undefined,
      width = undefined,
      height = undefined,
      hasStepZero = true,
      text = null,
    } = this.props;

    const safePercent = getSafePercent(percent);

    return (
      <div
        className="RSPBprogressBar"
        style={{ background: unfilledBackground, width, height }}
      >
        {React.Children.map(children, (step, index) => {
          const position =
            stepPositions.length > 0
              ? stepPositions[index]
              : getStepPosition(
                  React.Children.count(children),
                  index,
                  hasStepZero
                );
          return React.cloneElement(step as any, {
            accomplished: true,
            position,
            index,
          });
        })}

        {text ? <div className="RSPBprogressBarText">{text}</div> : null}

        <div
          className="RSPBprogression"
          style={{
            background: filledBackground,
            width: `${safePercent}%`,
          }}
        />
      </div>
    );
  }
}
