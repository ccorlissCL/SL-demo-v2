// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 13"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.813 1.599H2.188v2.625h2.624V1.599zM2.188.286h2.624c.711 0 1.313.602 1.313 1.313v2.625c0 .738-.602 1.312-1.313 1.312H2.188A1.296 1.296 0 01.875 4.224V1.599c0-.711.574-1.313 1.313-1.313zM4.812 8.6H2.188v2.625h2.626V8.599zM2.188 7.286h2.626c.71 0 1.312.602 1.312 1.313v2.625c0 .738-.602 1.312-1.313 1.312H2.188a1.296 1.296 0 01-1.312-1.312V8.599c0-.711.574-1.313 1.313-1.313zm7-5.687v2.625h2.626V1.599H9.187zm-1.312 0c0-.711.574-1.313 1.313-1.313h2.624c.711 0 1.313.602 1.313 1.313v2.625c0 .738-.602 1.312-1.313 1.312H9.188a1.296 1.296 0 01-1.313-1.312V1.599zm2.625 5.25c.355 0 .656.3.656.656v1.75h1.75c.356 0 .656.3.656.656 0 .383-.3.656-.656.656h-1.75v1.75c0 .383-.3.657-.656.657a.632.632 0 01-.656-.657v-1.75h-1.75a.632.632 0 01-.656-.656c0-.355.273-.656.656-.656h1.75v-1.75c0-.356.273-.656.656-.656z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
