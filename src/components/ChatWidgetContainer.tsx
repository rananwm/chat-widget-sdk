import * as React from 'react'
import { useChatContext } from '../context/chatContext'
import WidgetToggle from './WidgetToggle'
import { normalizePositionConfig } from '../utils/normalizePositionConfig'
import getDefaultStyles from '../utils/getDefaultStyles'
import { motion } from 'framer-motion'
import { IFRAME_URL, SAND_BOX } from '../constants'

type StyleOverrides = {
  chatContainer?: React.CSSProperties
  toggleContainer?: React.CSSProperties
  toggleButton?: React.CSSProperties
}

type PositionConfig = {
  side: 'left' | 'right'
  offset: number
}

interface Props {
  title?: string
  query?: string
  position?: 'left' | 'right' | PositionConfig
  styles?: StyleOverrides
}

const isActive = true

function ChatWidgetContainer(props: Props) {
  const { title, query, styles, position } = props

  const { isOpen, toggle } = useChatContext()

  const positionConfig = normalizePositionConfig(position)

  const {
    chatContainer: chatContainerStyle = {},
    toggleContainer: toggleContainerStyle = {},
    toggleButton: toggleButtonStyle = {}
  } = getDefaultStyles(styles, positionConfig)

  return (
    <React.Fragment>
      <motion.iframe
        className='chatWindowContainer'
        title={title || 'Welcome to Chat Widget'}
        sandbox={SAND_BOX}
        animate={isActive ? 'open' : 'closed'}
        initial='closed'
        variants={{
          closed: { opacity: 0, y: 4 },
          open: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.2, ease: 'easeIn' }}
        src={`${IFRAME_URL}?${query}`}
        style={
          (isOpen
            ? {
                border: 'none',
                margin: 0,
                zIndex: 2147483000,
                position: 'fixed',
                bottom: 100,
                right: 20,
                width: 376,
                maxWidth: ['90%', '376px'],
                minHeight: 250,
                maxHeight: ['60%', '704px'],
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 5px 40px',
                height: 'calc(100% - 120px)',
                borderRadius: 8,
                overflow: 'hidden',
                ...chatContainerStyle,
              }
            : {
                pointerEvents: 'none',
                height: 0,
                minHeight: 0,
                border: 'none'
              }) as any
        }
      >
        Loading...
      </motion.iframe>

      <motion.div
        className='toggleButtonContainer'
        style={{
          position: 'fixed',
          zIndex: 2147483003,
          bottom: '20px',
          right: '20px',
          ...toggleContainerStyle,
        }}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <WidgetToggle
          style={{
            outline: 'none !important',
            border: 'none !important',
            userSelect: 'none !important' as any,
            cursor: 'pointer',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...toggleButtonStyle,
          }}
          // isDisabled={isTransitioning}
          isOpen={isOpen as boolean}
          // customIconUrl={customIconUrl}
          iconVariant='filled'
          toggle={toggle}
        />
      </motion.div>
    </React.Fragment>
  )
}

export default ChatWidgetContainer
