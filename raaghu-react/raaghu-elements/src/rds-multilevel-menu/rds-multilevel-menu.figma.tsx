import React from "react"
import figma from "@figma/code-connect"
import RdsMultilevelMenu, { MenuSize, MenuState, MenuType } from "./rds-multilevel-menu"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsMultilevelMenu,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-System?node-id=959-2790",
  {
    props: {
      size: figma.enum("📏 Size", {
        Default: MenuSize.Default,
        Large: MenuSize.Large,
      }),
      // state: figma.enum("State", {  // Ensure this matches Figma
      //   Default: MenuState.Default,
      //   Hover: MenuState.Hover,
      //   Selected: MenuState.Selected,
      // }),
      // type: figma.enum("Type", { // Ensure this matches Figma
      //   Selectable: MenuType.Selectable,
      //   Expandable: MenuType.Expandable,
      // }),
    },
    example: (props) => <RdsMultilevelMenu  state={MenuState.Default} type={MenuType.Expandable}  {...props} />,
  }
);
