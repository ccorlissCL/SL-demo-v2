// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 8"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.434 1.344c.136.11.136.328 0 .465L6.719 7.523a.315.315 0 01-.465 0L.539 1.81c-.137-.137-.137-.356 0-.465l.52-.547c.136-.137.355-.137.464 0L6.5 5.747l4.95-4.95c.109-.137.327-.137.464 0l.52.547z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
