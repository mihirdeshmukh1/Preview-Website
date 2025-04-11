import React from "react"
import figma from "@figma/code-connect"
import RdsTimePicker from "./rds-time-picker"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsTimePicker,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-Kit?node-id=858-4103",
  {
    props: {
      state: figma.enum("💡 State", {
        Default: "default",
        Expanded: "expanded",
        Selected: "selected",
      }),
      style: figma.enum("✨ Style", {
        Compact: "compact",
        Default: "default",
      }),
    },
    example: (props) => <RdsTimePicker {...props} colorVariant="primary"/>,
  },
)
