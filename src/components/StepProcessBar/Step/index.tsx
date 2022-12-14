import React from "react";
import { Transition } from "react-transition-group";
import { getSafePercent } from "../../../utils/helper";
import { transitions } from "./transitions";
import "../processBar.scss";

export interface StepProps {
  accomplished: boolean;
  position: number;
  index: number;
  children: (props: {
    accomplished: boolean;
    transitionState: string;
    index: number;
    position: number;
  }) => React.ReactNode;
  transition?: "scale" | "rotate" | "skew";
  transitionDuration?: number;
}

export class Step extends React.Component<StepProps> {
  render() {
    const {
      accomplished,
      position,
      index,
      children,
      transition = null,
      transitionDuration = 300,
    } = this.props;

    const safePosition = getSafePercent(position);

    let style = {
      left: `${safePosition}%`,
      transitionDuration: `${transitionDuration}ms`,
    };

    return (
      <Transition in={accomplished} timeout={transitionDuration}>
        {(state) => {
          if (transition) {
            style = {
              ...style,
              ...transitions[transition][state],
            };
          }
          return (
            <div className="RSPBstep" style={style}>
              {children({
                accomplished,
                position: safePosition,
                transitionState: state,
                index,
              })}
            </div>
          );
        }}
      </Transition>
    );
  }
}
