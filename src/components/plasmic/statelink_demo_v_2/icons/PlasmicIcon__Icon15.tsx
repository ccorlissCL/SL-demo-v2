// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon15Icon(props: Icon15IconProps) {
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
          "M8.625 7.192v.766a.332.332 0 01-.328.328H3.703a.316.316 0 01-.328-.328v-.766c0-.164.137-.328.328-.328h4.594c.164 0 .328.164.328.328zm-.328 1.97c.164 0 .328.163.328.327v.766a.332.332 0 01-.328.328H3.703a.316.316 0 01-.328-.328v-.766c0-.164.137-.328.328-.328h4.594zM11.25 4.02v9.078c0 .738-.602 1.312-1.313 1.312H2.064A1.296 1.296 0 01.75 13.1V1.724C.75 1.013 1.324.41 2.063.41H7.64c.328 0 .683.164.93.41l2.269 2.27c.246.246.41.601.41.93zm-3.5-2.188V3.91h2.078L7.75 1.833zM9.938 13.1V5.224H7.094a.632.632 0 01-.657-.657V1.724H2.063v11.375h7.876z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */
