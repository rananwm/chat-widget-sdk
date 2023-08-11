import * as React from 'react'
import ChatWidgetContainer from './ChatWidgetContainer'
import { ChatProvider } from '../context/chatContext'
import { isMobileDevice } from '../utils/isMobileDevice';
import generateQueryParams from '../utils/generateQueryParams';


type StyleOverrides = {
  chatContainer?: React.CSSProperties;
  toggleContainer?: React.CSSProperties;
  toggleButton?: React.CSSProperties;
};

type PositionConfig = {
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

export const ChatWidget = (props: Props) => {
  const {
    companyName = '',
    customerId = '',
    showAgentAvailability = false,
    title = "Welcome",
    subTitle = "Hi, how can I help you today?",
    primaryColor = "1890ff",
    position = 'right',
    styles = {},
  } = props;

  const isMoblie = isMobileDevice()

  const query = generateQueryParams({
    title,
    companyName,
    customerId,
    showAgentAvailability,
    subTitle,
    primaryColor,
    isMoblie
  })

  return (
    <ChatProvider>
      <ChatWidgetContainer title={title} query={query} position={position} styles={styles}/>
    </ChatProvider>
  );
};