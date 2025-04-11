import React from "react"
import figma from "@figma/code-connect"
import RdsCardDetail from "./rds-card-detail"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsCardDetail,
  "https://www.figma.com/design/wGW5jiXyoAdO4DVLgCKXmw/Raaghu-Storybook-Elements?node-id=31-238",
  {
    props: {
      showSubtext: figma.boolean("🔤 - Show Subtext"),
      showHeader: figma.boolean("📝 - Show Header"),
      showLinkButton: figma.boolean("Show Link Button"),
      state: figma.enum("💡 State", {
        Default: "default",
        Selection: "selection",
      }),
    },
    example: (props) => <RdsCardDetail {...props} cardDatas={undefined} />,
  },
)
