import * as React from 'react';
declare type StyleOverrides = {
    chatContainer?: React.CSSProperties;
    toggleContainer?: React.CSSProperties;
    toggleButton?: React.CSSProperties;
};
declare type PositionConfig = {
    side: "left" | "right";
    offset: number;
};
interface Props {
    companyName?: String;
    customerId: String;
    showAgentAvailability?: Boolean;
    title?: string;
    subTitle?: String;
    primaryColor?: String;
    position?: "left" | "right" | PositionConfig;
    styles?: StyleOverrides;
}
export declare const ChatWidget: (props: Props) => React.JSX.Element;
export {};
