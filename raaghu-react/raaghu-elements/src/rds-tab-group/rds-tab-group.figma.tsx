import React from "react";
import figma from "@figma/code-connect";
import RdsTabGroup, { TabState, TabType } from "./rds-tab-group";

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsTabGroup,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-System?node-id=380-3338",
  {
    props: {
      showRightIcon: figma.boolean("➡️ - Show Right Icon"),
      title: figma.string("✏️ Text / Title"),
      showLeftIcon: figma.boolean("⬅️ - Show Left Icon"),
      type: figma.enum("⚠️ Type", {
        Vertical: TabType.Vertical,
        Horizontal: TabType.Horizontal,
      }),
      layout: figma.enum("📱 Layout", {
        Filled: "filled",
        Flap: "flap",
        "Line - Bottom": "line---bottom",
        "Line - Bottom Solid": "line---bottom-solid",
        "Line - Left": "line---left",
        "Line - Left Solid": "line---left-solid",
        "Line - Right": "line---right",
        "Line - Right Solid": "line---right-solid",
        "Line - Top": "line---top",
        "Line - Top Solid": "line---top-solid",
        Pill: "pill",
      }),
      state: figma.enum("💡 State", {
        Default: TabState.Default,
        Hover: TabState.Hover,
        Selected: TabState.Selected,
        Disabled: TabState.Disabled,
      }),
    },
    example: (props) => <RdsTabGroup {...props}  rightIcon="plus" level={1} leftIcon="user_tab" icon="cancel"/>,
  }
);
