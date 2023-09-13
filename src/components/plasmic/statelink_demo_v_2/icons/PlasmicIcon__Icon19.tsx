// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon19Icon(props: Icon19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 15"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.723 13.33a.467.467 0 01-.301.546l-.438.11a.426.426 0 01-.492-.247c-.383 0-1.832.383-2.133.575 0 .218-.109.41-.328.464l-.41.11c-.246.055-.492-.082-.547-.301L8.313 4.06v9.953c0 .492-.41.875-1.094.875H.656c-.273 0-.656-.383-.656-.875V1.763C0 1.298.383.888.656.888H7.22c.683 0 1.093.41 1.093.875V1.9l.301-.083a.426.426 0 01.492.247c.383 0 1.832-.383 2.133-.575 0-.218.11-.41.328-.464l.41-.11c.247-.055.493.082.547.3l3.2 12.114zM3.5 13.574v-1.312H1.312v1.312H3.5zm0-2.625V4.825H1.312v6.125H3.5zm0-7.437V2.2H1.312v1.313H3.5zM7 13.575v-1.312H4.812v1.312H7zm0-2.625V4.825H4.812v6.125H7zm0-7.437V2.2H4.812v1.313H7zm5.059 9.734c.464-.219 1.668-.52 2.132-.574L11.54 2.556c-.465.219-1.668.52-2.133.574l2.653 10.117z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */
