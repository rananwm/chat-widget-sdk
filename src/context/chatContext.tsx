import * as React from 'react'
import { ThemeUIProvider } from "theme-ui";
import getThemeConfig from "../utils/getThemeConfig";

export interface ChatContextType {
  isOpen: Boolean;
  toggle: () => void;
}

const defaultProvider: ChatContextType = {
  isOpen: false,
  toggle: () => null,
};

const ChatContext = React.createContext(defaultProvider);

const ChatProvider = ({
  children,
  primaryColor,
}: {
  children: React.ReactNode;
  primaryColor?: String;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const theme = getThemeConfig({
    primary: (primaryColor || "1890ff") as string,
  });

  const values = {
    isOpen,
    toggle: () => {
      setIsOpen(!isOpen);
    },
  };

  return (
    <ThemeUIProvider theme={theme as any}>
      <ChatContext.Provider value={values}>
        {children}
        </ChatContext.Provider>
    </ThemeUIProvider>
  );
};

const useChatContext = () => {
  const context = React.useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};

export { ChatProvider, useChatContext };
