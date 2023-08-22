# chat-widget-sdk

> A SDK to use Chat Widget in your app

[![NPM](https://img.shields.io/npm/v/chat-widget-sdk.svg)](https://www.npmjs.com/package/chat-widget-sdk) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add rananwm/chat-widget-sdk#main
```

## Usage

### Using in HTML

Paste the code below between your `<head>` and `</head>` tags:

```html
<script type="text/javascript">
  // Insert Props

  window.ChatWidgetProps = {
    // Props
  }
</script>
<script
  type="module"
  src="https://chat-widget-nu.vercel.app/widget.js"
></script>
```

### Using in React

Place the code below in any pages on which you would like to render the widget. If you'd like to render it in all pages by default, place it in the root component of your app.

```tsx
import React, { Component } from 'react'

import { ChatWidget } from 'chat-widget-sdk'

const Example = () => {
  return (
    <ChatWidget
    // Props
    />
  )
}

export default Example
```

## Props Types

```ts
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
  companyName?: String
  customerId: String
  showAgentAvailability?: Boolean
  title?: string
  subtitle?: String
  primaryColor?: String
  position?: 'left' | 'right' | PositionConfig
  styles?: StyleOverrides
}
```

## License

MIT © [rananwm](https://github.com/rananwm)
