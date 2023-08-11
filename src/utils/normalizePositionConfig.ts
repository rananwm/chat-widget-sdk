import { DEFAULT_X_OFFSET } from "../constants";

type PositionConfig = {
  side: "left" | "right";
  offset: number;
};

export const normalizePositionConfig = (
  position?: "left" | "right" | PositionConfig
): PositionConfig => {
  if (!position) {
    return { side: "right", offset: DEFAULT_X_OFFSET };
  }

  switch (position) {
    case "left":
      return { side: "left", offset: DEFAULT_X_OFFSET };
    case "right":
      return { side: "right", offset: DEFAULT_X_OFFSET };
    default:
      return position;
  }
};