// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 15"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.625 7.67v.765a.332.332 0 01-.328.328H3.703a.316.316 0 01-.328-.328v-.766c0-.164.137-.328.328-.328h4.594c.164 0 .328.164.328.328zm-.328 1.968c.164 0 .328.164.328.328v.766a.332.332 0 01-.328.328H3.703a.316.316 0 01-.328-.328v-.766c0-.164.137-.328.328-.328h4.594zm2.953-5.14v9.077c0 .739-.602 1.313-1.313 1.313H2.064A1.296 1.296 0 01.75 13.575V2.2c0-.71.574-1.312 1.313-1.312H7.64c.328 0 .683.164.93.41l2.269 2.27c.246.246.41.601.41.93zM7.75 2.31v2.078h2.078L7.75 2.31zm2.188 11.265V5.7H7.094a.632.632 0 01-.657-.656V2.2H2.063v11.375h7.876z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
