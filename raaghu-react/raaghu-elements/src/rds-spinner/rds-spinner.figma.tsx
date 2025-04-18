import React from "react"
import figma from "@figma/code-connect"
import RdsSpinner, { SpinnerLayout, SpinnerSize } from "./rds-spinner"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsSpinner,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-Kit?node-id=841-5077",
  {
    props: {
      labelText: figma.string("📝 Label Text"),
      showLabel: figma.boolean("✏️ Show Label"),
      layout: figma.enum("📱 Layout", {
        "Label on bottom": SpinnerLayout.LabelOnBottom,
        "Spinner + Label": SpinnerLayout.SpinnerAndLabel,
        "Label + Spinner": SpinnerLayout.LabelAndSpinner,
        "Label on top": SpinnerLayout.LabelOnTop,
      }),
      size: figma.enum("📏 Size", {
        Small: SpinnerSize.Small,
        Medium: SpinnerSize.Medium,
        Large: SpinnerSize.Large,
      }),
    },
    example: (props) => <RdsSpinner {...props} colorVariant='primary'  spinnerType='border'/>,
  },
)
