import React from "react"
import figma from "@figma/code-connect"
import RdsWidget from "./rds-widget"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsWidget,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-System?node-id=573-9259",
  {
    props: {
      description: figma.boolean("✍ Description"),
      type: figma.enum("⚠️ Type", {
        "Card with Button": "card-with-button",
        "Card with Link Button": "card-with-link-button",
        "Card with Image": "card-with-image",
        "Card with Ring Chart": "card-with-ring-chart",
        "Card with Map": "card-with-map",
        "Card with Graph": "card-with-graph",
        "Example - Badges": "example---badges",
        "Example Tags": "example-tags",
        "Example - Avatar": "example---avatar",
        "Example - Avatar Alt": "example---avatar-alt",
      }),
    },
    example: (props) => <RdsWidget {...props} headerTitle={"Demo"} />,
  },
)
