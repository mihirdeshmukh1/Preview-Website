import React from "react";
import figma from "@figma/code-connect";
import RdsOffcanvas, { RdsOffcanvasBackDrop, RdsOffcanvasPlacement } from "./rds-offcanvas";
import RdsButton from "../rds-button";

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsOffcanvas,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-System?node-id=1986-8214",
  {
    props: {
      showTertiaryButton: figma.boolean("⏺ Show Tertiary Button"),
      showSecondaryButton: figma.boolean("🔶 Show Secondary Button"),
      showPrimaryButton: figma.boolean("🔷 Show Primary Button"),
    },
    example: (props) => (
      <RdsOffcanvas
        canvasTitle="NEW TENENT"
        offId="canvasExample"
        offcanvasbutton={
          <RdsButton
            aria-controls="canvasExample"
            colorVariant="primary"
            data-bs-target="#canvasExample"
            data-bs-toggle="offcanvas"
            label="Button"
            size="medium"
            type="button"
          />
        }
        offcanvaswidth={650}
        placement={RdsOffcanvasPlacement.Start}
        backDrop={RdsOffcanvasBackDrop.Static}
        scrolling={false}
        {...props} // Ensures props from Figma UI are applied
      >
          <div className="d-flex flex-column h-100">
          </div>
      </RdsOffcanvas>
    ),
  }
);
