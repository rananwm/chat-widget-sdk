import { CSSProperties } from "react";
declare type PositionConfig = {
    side: "left" | "right";
    offset: number;
};
declare type StyleOverrides = {
    chatContainer?: CSSProperties;
    toggleContainer?: CSSProperties;
    toggleButton?: CSSProperties;
};
declare const getDefaultStyles: (styles: StyleOverrides | undefined, position: PositionConfig) => StyleOverrides;
export default getDefaultStyles;
