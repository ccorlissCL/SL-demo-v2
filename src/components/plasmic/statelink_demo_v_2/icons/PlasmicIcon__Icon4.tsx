// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.017 6h7.027c.492 0 .739.602.383.957l-3.5 3.5a.56.56 0 01-.793 0l-3.5-3.5c-.355-.355-.11-.957.383-.957zM13.508.75c1.176 0 1.778 1.422.93 2.242l-4.402 4.43v6.043c0 1.094-1.258 1.64-2.106 1.066L6.18 13.22a1.401 1.401 0 01-.52-1.094V7.422l-4.43-4.43C.384 2.172.986.75 2.16.75h11.348zM8.723 6.875l4.813-4.813H2.16l4.812 4.813v5.25l1.75 1.313V6.875z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
