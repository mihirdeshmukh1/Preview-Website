import React from "react"
import figma from "@figma/code-connect"
import RdsTextArea, { TextareaState, TextareaStyle } from "./rds-text-area"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsTextArea,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-Kit?node-id=1324-14474",
  {
    props: {
     // isMandatory: figma.boolean("❗ Is Mandatory"), 
      label: figma.string("✏️ Label"),
      showTitle: figma.boolean("🆕 Show Title"),
      state: figma.enum("💡 State", {
        Default: TextareaState.Default,
        Active: TextareaState.Active,
        Selected: TextareaState.Selected,
        Disabled: TextareaState.Disabled,
        Error: TextareaState.Error,
      }),
      style: figma.enum("✨ Style", {
        Default: TextareaStyle.Default,
        Pill: TextareaStyle.Pill,
        BottomOutline: TextareaStyle.BottomOutline,
      }),
    },
    example: (props) => <RdsTextArea {...props} placeholder="Enter Description" rows={5}/>,
  }
);
