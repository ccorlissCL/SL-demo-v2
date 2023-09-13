// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon8Icon(props: Icon8IconProps) {
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
          "M15.723 12.853a.467.467 0 01-.301.546l-.438.11a.426.426 0 01-.492-.246c-.383 0-1.832.383-2.133.574 0 .219-.109.41-.328.465l-.41.11c-.246.054-.492-.083-.547-.302L8.313 3.583v9.953c0 .492-.41.875-1.094.875H.656c-.273 0-.656-.383-.656-.875V1.286C0 .821.383.411.656.411H7.22c.683 0 1.093.41 1.093.875v.137l.301-.082a.426.426 0 01.492.246c.383 0 1.832-.383 2.133-.574 0-.219.11-.41.328-.465l.41-.11c.247-.054.493.083.547.301l3.2 12.114zM3.5 13.099v-1.313H1.312V13.1H3.5zm0-2.625V4.349H1.312v6.125H3.5zm0-7.438V1.724H1.312v1.312H3.5zM7 13.1v-1.313H4.812V13.1H7zm0-2.625V4.349H4.812v6.125H7zm0-7.438V1.724H4.812v1.312H7zm5.059 9.735c.464-.22 1.668-.52 2.132-.575L11.54 2.08c-.465.219-1.668.52-2.133.574l2.653 10.118z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
