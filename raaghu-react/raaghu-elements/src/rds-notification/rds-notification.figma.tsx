import React from "react"
import figma from "@figma/code-connect"
import RdsNotification, { NotificationLayout, NotificationStyle, NotificationType } from "./rds-notification"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsNotification,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-Kit?node-id=1426-11567",
  {
    props: {
      showDismissIcon: figma.boolean("⛔️ Show Dismiss Icon"),
      showSecondaryButton: figma.boolean("🔶 Show Secondary Button"),
      showPrimaryButton: figma.boolean("🔷 Show Primary Button"),
      showButton: figma.boolean("🕹️ Show Button"),
      layout: figma.enum("📱 Layout", {
        Vertical: NotificationLayout.Vertical,
        Horizontal: NotificationLayout.Horizontal,
      }),
      style: figma.enum("✨ Style", {
        Default: NotificationStyle.Default,
        Avatar: NotificationStyle.Avatar,
        Icon: NotificationStyle.Icon,
        Image: NotificationStyle.Image,
      }),
      type: figma.enum("⚠️ Type", {
        Error: NotificationType.Error,
        Info: NotificationType.Info,
        Success: NotificationType.Success,
        Warning: NotificationType.Warning,
      }),
    },
    example: (props) => <RdsNotification {...props} notifications={[
      {
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: 'success',
        time: 'a month ago',
        title: 'Notification Title',
        urlTitle: 'hello'
      }
    ]}/>,
  },
)
