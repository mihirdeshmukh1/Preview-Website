import React from "react"
import figma from "@figma/code-connect"
import RdsWebsiteMatrix from "./rds-website-matrix"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsWebsiteMatrix,
  "https://www.figma.com/design/wGW5jiXyoAdO4DVLgCKXmw/Raaghu-Storybook-Elements?node-id=97-2455",
  {
    props: {
      layout: figma.enum("Layout", {
        "Center Aligned with Icon": "center-aligned-with-icon",
        "Center Aligned without Icon": "center-aligned-without-icon",
        "Left Aligned+Icon on Top": "left-aligned-icon-on-top",
        "Left Icon": "left-icon",
        "Left Line": "left-line",
        "Line on Top": "line-on-top",
      }),
      type: figma.enum("Type", {
        Primary: "primary",
        Secondary: "secondary",
        Warning: "warning",
        Success: "success",
        Error: "error",
      }),
    },
    example: (props) => <RdsWebsiteMatrix  {...props} item={undefined}  />,
  },
)
