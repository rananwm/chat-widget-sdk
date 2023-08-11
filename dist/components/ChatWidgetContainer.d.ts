import * as React from 'react';
declare type StyleOverrides = {
    chatContainer?: React.CSSProperties;
    toggleContainer?: React.CSSProperties;
    toggleButton?: React.CSSProperties;
};
declare type PositionConfig = {
    side: 'left' | 'right';
    offset: number;
};
interface Props {
    title?: string;
    query?: string;
    position?: 'left' | 'right' | PositionConfig;
    styles?: StyleOverrides;
}
declare function ChatWidgetContainer(props: Props): React.JSX.Element;
export default ChatWidgetContainer;
