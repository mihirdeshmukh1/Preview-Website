import React from "react"
import figma from "@figma/code-connect"
import RdsPrice from "./rds-price"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsPrice,
  "https://www.figma.com/design/wGW5jiXyoAdO4DVLgCKXmw/Raaghu-Storybook-Elements?node-id=228-1098",
  {
    props: {
      showIcon: figma.boolean("Show Icon"),
      property1: figma.enum("Property 1", {
        "Price on Left": "price-on-left",
        "Price on Right": "price-on-right",
      }),
    },
    example: (props) => <RdsPrice {...props} mrp={0} currentPrice={0} withDiscount={false} />,
  },
)
