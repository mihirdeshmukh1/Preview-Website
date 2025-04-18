import React from "react"
import figma from "@figma/code-connect"
import RdsDivider from "./rds-divider"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsDivider,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-Kit?node-id=817-19911",
  {
    props: {
      size: figma.enum("📏 Size", {
        Small: "small",
        Medium: "medium",
        Large: "large",
      }),
      Style: figma.enum("✨ Style", {
        Subtle: "subtle",
        Strong: "strong",
        Primary: "primary",
      }),
      layout: figma.enum("📱 Layout", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
    },
    example: (props) => <RdsDivider   
    dividerMessage="Content"
    icon="information"
    iconHeight="20px"
    iconStroke
    iconWidth="20px"
    textalign="middle"
    iconShow
    {...props} />,
  },
)
