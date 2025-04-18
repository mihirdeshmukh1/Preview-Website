import React from "react"
import figma from "@figma/code-connect"
import RdsWidgetPortal from "./rds-widget-portal"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsWidgetPortal,
  "https://www.figma.com/design/wGW5jiXyoAdO4DVLgCKXmw/Raaghu-Storybook-Elements?node-id=97-3647",
  {
    props: {
      showProgressBar: figma.boolean("Show Progress Bar"),
      showButton: figma.boolean("Show Button"),
    },
    example: (props) => <RdsWidgetPortal {...props} widgetTitle={"Title"} subTitle={"SubTitle"}  />,
  },
)
