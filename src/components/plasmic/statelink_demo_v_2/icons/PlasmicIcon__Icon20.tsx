// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.625.638h2.297c.164 0 .328.164.328.328v.656a.332.332 0 01-.328.328H2.625c-.738 0-1.313.602-1.313 1.313v5.25c0 .738.575 1.312 1.313 1.312h2.297c.164 0 .328.164.328.328v.657a.332.332 0 01-.328.328H2.625A2.626 2.626 0 010 8.513v-5.25A2.626 2.626 0 012.625.638zm6.316.547c.11-.137.329-.137.465 0l4.485 4.484a.315.315 0 010 .465l-4.485 4.484c-.136.137-.355.137-.465 0l-.546-.547c-.137-.109-.137-.328 0-.464l3.09-3.008H4.702a.316.316 0 01-.328-.328v-.766c0-.164.137-.328.328-.328h6.781l-3.09-2.98c-.136-.137-.136-.356 0-.465l.547-.547z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
