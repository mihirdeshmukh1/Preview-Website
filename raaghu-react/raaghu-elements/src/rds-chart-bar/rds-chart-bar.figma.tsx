import React from "react"
import figma from "@figma/code-connect"
import RdsBarChart from "./rds-chart-bar"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsBarChart,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-System?node-id=9857-2655",
  {
    props: {
      label: figma.string("Label"),
      graphData3: figma.string("Graph data 3"),
      showDataset3: figma.boolean("Show Dataset 3"),
      showDataset1: figma.boolean("Show Dataset 1"),
      graphData2: figma.string("Graph Data 2"),
      showLegend: figma.boolean("Show Legend"),
      showGrid: figma.boolean("Show Grid"),
      graphData1: figma.string("Graph Data 1"),
      showDataset2: figma.boolean("Show Dataset 2"),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
      }),
    },
    example: (props) => <RdsBarChart  {...props} labels={[]} options={undefined} dataSets={[]} id={undefined} />,
  },
)
