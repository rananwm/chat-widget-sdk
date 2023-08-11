import * as React from 'react';
export interface ChatContextType {
    isOpen: Boolean;
    toggle: () => void;
}
declare const ChatProvider: ({ children, primaryColor, }: {
    children: React.ReactNode;
    primaryColor?: String | undefined;
}) => React.JSX.Element;
declare const useChatContext: () => ChatContextType;
export { ChatProvider, useChatContext };
