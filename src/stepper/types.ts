import React from "react";

export interface StepperProps {
  withNumbers?: boolean;
  Icon?: boolean;
  circleColor?: `#${string}`;
  activeStep: number;
  steps?: Array<Exclude<React.ReactNode, boolean | null | undefined>>;
}

export interface StepProps {
  label?: string;
  Icon?: () => JSX.Element | number | null;
  active?: boolean;
  done?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  labelColor?: `#${string}`;
  circleColor?: `#${string}`;
  children?: React.ReactNode;
}
