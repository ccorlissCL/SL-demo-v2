// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon12Icon(props: Icon12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.56 18.82l-4.727-4.726c-.117-.078-.234-.156-.352-.156h-.507c1.21-1.407 1.992-3.282 1.992-5.313C16.966 4.172 13.294.5 8.84.5 4.349.5.716 4.172.716 8.625A8.119 8.119 0 008.84 16.75c2.031 0 3.867-.742 5.312-1.953v.508c0 .117.04.234.117.351l4.727 4.727c.195.195.508.195.664 0l.898-.899c.196-.156.196-.468 0-.664zM8.84 14.875a6.219 6.219 0 01-6.25-6.25 6.243 6.243 0 016.25-6.25c3.438 0 6.25 2.813 6.25 6.25a6.243 6.243 0 01-6.25 6.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */
