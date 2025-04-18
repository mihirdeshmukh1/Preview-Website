import React from "react"
import figma from "@figma/code-connect"
import RdsHeader from "./rds-header"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsHeader,
  "https://www.figma.com/design/wGW5jiXyoAdO4DVLgCKXmw/Raaghu-Storybook-Elements?node-id=62-379",
  {
    props: {
      showIcon: figma.boolean("Show Icon"),
      size: figma.enum("Size", {
        H1: "h1",
        H2: "h2",
        H3: "h3",
        H4: "h4",
        H5: "h5",
        H6: "h6",
        H7: "h7",
        H8: "h8",
        H9: "h9",
        H10: "h10",
        H11: "h11",
      }),
      type: figma.enum("Type", {
        Success: "success",
        Primary: "primary",
        Secondary: "secondary",
        Warning: "warning",
        Error: "error",
      }),
    },
    example: (props) => <RdsHeader {...props} />,
  },
)
