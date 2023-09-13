// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon11Icon(props: Icon11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 10"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.46 8.567a.405.405 0 010-.597L7.81.587a.476.476 0 01.597 0l7.348 7.383a.405.405 0 010 .597l-.668.704c-.176.14-.457.14-.598 0L8.125 2.907 1.727 9.271c-.141.14-.422.14-.598 0L.46 8.567z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon11Icon;
/* prettier-ignore-end */
