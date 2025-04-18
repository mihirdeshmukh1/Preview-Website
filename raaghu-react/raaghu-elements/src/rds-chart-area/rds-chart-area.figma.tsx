import React from "react"
import figma from "@figma/code-connect"
import RdsAreaChart from "./rds-chart-area"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsAreaChart,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-System?node-id=10484-3324",
  {
    props: {
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
      }),
    },
    example: (props) => <RdsAreaChart {...props} labels={[]} options={undefined} dataSets={[]} id={""} isGradient={false} />,
  },
)
