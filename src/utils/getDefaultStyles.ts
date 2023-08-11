import { CSSProperties } from "react";
import { DEFAULT_X_OFFSET } from "../constants";

type PositionConfig = {
  side: "left" | "right";
  offset: number;
};

type StyleOverrides = {
  chatContainer?: CSSProperties;
  toggleContainer?: CSSProperties;
  toggleButton?: CSSProperties;
};

const getDefaultStyles = (
  styles: StyleOverrides = {},
  position: PositionConfig
): StyleOverrides => {
  const {
    chatContainer: chatContainerStyle = {},
    toggleContainer: toggleContainerStyle = {},
    toggleButton: toggleButtonStyle = {},
  } = styles;
  const { side = "right", offset = DEFAULT_X_OFFSET } = position;

  switch (side) {
    case "left":
      return {
        chatContainer: { left: offset, right: "auto", ...chatContainerStyle },
        toggleContainer: {
          left: offset,
          right: "auto",
          ...toggleContainerStyle,
        },
        toggleButton: toggleButtonStyle,
      };
    case "right":
    default:
      return {
        chatContainer: { right: offset, left: "auto", ...chatContainerStyle },
        toggleContainer: {
          right: offset,
          left: "auto",
          ...toggleContainerStyle,
        },
        toggleButton: toggleButtonStyle,
      };
  }
};

export default getDefaultStyles;
