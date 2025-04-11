import React from "react"
import figma from "@figma/code-connect"
import RdsCheckboxGroup from "./rds-checkbox-group"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsCheckboxGroup,
  "https://www.figma.com/design/wGW5jiXyoAdO4DVLgCKXmw/Raaghu-Storybook-Elements?node-id=34-3782",
  {
    props: {
      style: figma.enum("✨ Style", {
        Toggle: "toggle",
        "checkbox list": "checkbox-list",
      }),
      level: figma.enum("📊 Level", {
        "Level 2": "level-2",
        "Level 3": "level-3",
        "Level 4": "level-4",
      }),
      layout: figma.enum("📱 Layout", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
    },
    example: (props) => <RdsCheckboxGroup {...props} itemList={undefined} />,
  },
)
