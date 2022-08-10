import React, { memo, useCallback, useMemo } from "react";
import { ProgressBar, Step } from "../StepProcessBar";
import { CircleIndexProcess, TextProcess } from "./styles";

const steps = [
  {
    status: "1",
  },
  {
    status: "2",
  },
];

const textProcess = (index: number) => {
  switch (index) {
    case 0:
      return "Tickets";
    case 1:
      return "Checkout";
  }
};

export interface IProgressBarComponentProps {
  step: number;
}

const ProgressBarComponent = (props: IProgressBarComponentProps) => {
  const { step } = props;

  const getStepPosition = useCallback(() => {
    switch (step) {
      case 1:
        return 0.5;
      case 2:
        return 1;
      default:
        return 0.5;
    }
  }, [step]);

  const addStyles = (index: number) => {
    if (index === 0) return { paddingLeft: "15px" };
    return { paddingRight: "35px" };
  };

  return (
    <ProgressBar
      height={2}
      percent={100 * getStepPosition()}
      filledBackground={"#EA5284"}
      unfilledBackground={"#FFFFFF"}
    >
      {steps.map((item, index) => {
        return (
          <Step
            key={item.status}
            position={100 * getStepPosition()}
            transition="scale"
            accomplished={true}
            index={index}
          >
            {({ accomplished, index }) => (
              <React.Fragment>
                <CircleIndexProcess accomplished={accomplished}>
                  {index + 1}
                </CircleIndexProcess>
                <TextProcess
                  accomplished={accomplished}
                  color="white"
                  style={addStyles(index)}
                >
                  {textProcess(index)}
                </TextProcess>
              </React.Fragment>
            )}
          </Step>
        );
      })}
    </ProgressBar>
  );
};

export default memo(ProgressBarComponent);
