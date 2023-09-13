// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon14Icon(props: Icon14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 11"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.185 1.06v8.53c0 .597-.73.896-1.161.464L.776 5.806a.681.681 0 010-.963L5.024.596c.431-.431 1.161-.133 1.161.464z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
