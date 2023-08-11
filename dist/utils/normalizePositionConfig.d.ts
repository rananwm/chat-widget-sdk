declare type PositionConfig = {
    side: "left" | "right";
    offset: number;
};
export declare const normalizePositionConfig: (position?: "left" | "right" | PositionConfig | undefined) => PositionConfig;
export {};
