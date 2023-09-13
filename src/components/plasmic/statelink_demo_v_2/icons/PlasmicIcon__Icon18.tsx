// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon18Icon(props: Icon18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.813 2.075H2.188V4.7h2.624V2.075zM2.188.763h2.624a1.33 1.33 0 011.313 1.312V4.7c0 .739-.602 1.313-1.313 1.313H2.188A1.296 1.296 0 01.875 4.7V2.075c0-.71.574-1.312 1.313-1.312zm2.624 8.312H2.188V11.7h2.626V9.075zM2.188 7.763h2.626c.71 0 1.312.601 1.312 1.312V11.7c0 .739-.602 1.313-1.313 1.313H2.188A1.296 1.296 0 01.875 11.7V9.075c0-.71.574-1.312 1.313-1.312zm7-5.688V4.7h2.626V2.075H9.187zm-1.312 0c0-.71.574-1.312 1.313-1.312h2.624a1.33 1.33 0 011.313 1.312V4.7c0 .739-.602 1.313-1.313 1.313H9.188A1.296 1.296 0 017.875 4.7V2.075zm2.625 5.25c.355 0 .656.301.656.657v1.75h1.75c.356 0 .656.3.656.656 0 .383-.3.656-.656.656h-1.75v1.75c0 .383-.3.656-.656.656a.632.632 0 01-.656-.656v-1.75h-1.75a.632.632 0 01-.656-.656c0-.356.273-.656.656-.656h1.75v-1.75c0-.356.273-.657.656-.657z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
