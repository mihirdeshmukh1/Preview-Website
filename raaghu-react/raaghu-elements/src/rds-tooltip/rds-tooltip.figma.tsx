import React from "react"
import figma from "@figma/code-connect"
import { RdsTooltip } from ".."
import { TooltipStyle } from "./rds-tooltip"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsTooltip,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-Kit?node-id=591-9150",
  {
    props: {
      label: figma.string("✏️ Label"),
      style: figma.enum("✨ Style", {
        "No Arrow": TooltipStyle.NoArrow,
        "Middle Top Arrow": TooltipStyle.MiddleTopArrow,
        "Middle Bottom Arrow": TooltipStyle.MiddleBottomArrow,
        "Left Arrow": TooltipStyle.LeftArrow,
        "Left Top Arrow": TooltipStyle.LeftTopArrow,
        "Left Bottom Arrow": TooltipStyle.LeftBottomArrow,
        "Right Arrow": TooltipStyle.RightArrow,
        "Right Top Arrow": TooltipStyle.RightTopArrow,
        "Right Bottom Arrow": TooltipStyle.RightBottomArrow,
      }),
    },
    example: (props) => <RdsTooltip {...props} children={<button className="btn btn-primary">Button</button>} />,
  },
)
