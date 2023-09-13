// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.227.375C18.65.375 23.852 5.578 23.852 12S18.65 23.625 12.227 23.625C5.806 23.625.602 18.422.602 12S5.806.375 12.227.375zm6.75 12.938v-2.626c0-.28-.28-.562-.562-.562h-4.313V5.812c0-.28-.28-.562-.562-.562h-2.625a.57.57 0 00-.563.563v4.312H6.04a.57.57 0 00-.563.563v2.624c0 .329.235.563.563.563h4.312v4.313c0 .328.235.562.563.562h2.625a.57.57 0 00.562-.563v-4.312h4.313a.57.57 0 00.562-.563z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
