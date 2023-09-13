// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon13Icon(props: Icon13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 4.438c.71 0 1.313.601 1.313 1.312 0 .738-.602 1.313-1.313 1.313A1.296 1.296 0 01.687 5.75c0-.71.575-1.313 1.313-1.313zM.687 1.594A1.315 1.315 0 012 .28c.71 0 1.313.602 1.313 1.313 0 .738-.602 1.312-1.313 1.312A1.296 1.296 0 01.687 1.594zm0 8.312c0-.71.575-1.312 1.313-1.312.71 0 1.313.601 1.313 1.312 0 .739-.602 1.313-1.313 1.313A1.296 1.296 0 01.687 9.906z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */
