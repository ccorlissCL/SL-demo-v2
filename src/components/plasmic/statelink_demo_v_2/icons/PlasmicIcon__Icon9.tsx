// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 11"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.125.161h2.297c.164 0 .328.164.328.328v.657a.332.332 0 01-.328.328H3.125c-.738 0-1.313.601-1.313 1.312v5.25c0 .738.575 1.313 1.313 1.313h2.297c.164 0 .328.164.328.328v.656a.332.332 0 01-.328.328H3.125A2.626 2.626 0 01.5 8.036v-5.25A2.626 2.626 0 013.125.161zm6.316.547c.11-.137.329-.137.465 0l4.485 4.484a.315.315 0 010 .465l-4.485 4.485c-.136.136-.355.136-.465 0l-.546-.547c-.137-.11-.137-.328 0-.465l3.09-3.008H5.202a.316.316 0 01-.328-.328v-.766c0-.164.137-.328.328-.328h6.781l-3.09-2.98c-.136-.137-.136-.356 0-.465L9.44.708z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
