function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var themeUi = require('theme-ui');
var tinycolor = _interopDefault(require('tinycolor2'));
var framerMotion = require('framer-motion');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var getThemeConfig = function getThemeConfig(settings) {
  var _settings$primary = settings.primary,
    primary = _settings$primary === void 0 ? '#1890ff' : _settings$primary;
  var base = tinycolor(primary);
  var overrides = {
    primary: base.toString(),
    light: base.lighten().toString(),
    dark: base.darken().toString()
  };
  return {
    useBodyStyles: false,
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
      body: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;',
      heading: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;',
      monospace: '"Roboto Mono", monospace'
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
      body: 400,
      heading: 600,
      bold: 600
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125
    },
    colors: {
      text: '#141414',
      background: '#fff',
      primary: overrides.primary,
      darker: overrides.dark,
      lighter: overrides.light,
      secondary: '#722ed1',
      green: '#52c41a',
      red: '#ff4d4f',
      muted: '#f0f0f0',
      gray: 'rgba(0, 0, 0, 0.45)',
      input: 'rgba(0, 0, 0, 0.65)',
      offset: 'rgba(255, 255, 255, 0.8)'
    },
    text: {
      "default": {
        color: 'text',
        fontSize: 1
      },
      caps: {
        textTransform: 'uppercase',
        letterSpacing: '0.2em'
      },
      heading: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading'
      }
    },
    buttons: {
      primary: {
        cursor: 'pointer',
        outline: 0,
        transition: '0.2s',
        background: overrides.primary,
        borderColor: overrides.primary,
        '&:hover': {
          background: overrides.light,
          borderColor: overrides.light
        },
        '&:active': {
          background: overrides.dark,
          borderColor: overrides.dark
        }
      },
      secondary: {
        cursor: 'pointer',
        outline: 0,
        transition: '0.2s',
        background: base.lighten(40).toString(),
        color: overrides.primary,
        borderColor: overrides.primary,
        borderWidth: 1,
        borderStyle: 'solid',
        '&:hover': {
          color: '#fff',
          background: overrides.primary,
          borderColor: overrides.primary
        },
        '&:active': {
          background: overrides.dark,
          borderColor: overrides.dark
        }
      },
      link: {
        cursor: 'pointer',
        outline: 0,
        transition: '0.2s',
        backgroundColor: 'background',
        '&:hover': {
          backgroundColor: 'offset',
          borderColor: 'offset'
        },
        '&:active': {
          backgroundColor: 'offset',
          borderColor: 'offset'
        }
      }
    },
    styles: {
      root: {
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
        fontSize: 1
      },
      h1: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 5
      },
      h2: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 4
      },
      h3: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 3
      },
      h4: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 2
      },
      h5: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 1
      },
      h6: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 0
      },
      p: {
        color: 'text',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body'
      },
      a: {
        color: 'primary',
        userSelect: 'none',
        '&:hover': {
          color: overrides.light
        },
        '&:active': {
          color: overrides.dark
        }
      },
      pre: {
        fontFamily: 'monospace',
        overflowX: 'auto',
        code: {
          color: 'inherit'
        }
      },
      code: {
        fontFamily: 'monospace',
        fontSize: 'inherit'
      },
      table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0
      },
      th: {
        textAlign: 'left',
        borderBottomStyle: 'solid'
      },
      td: {
        textAlign: 'left',
        borderBottomStyle: 'solid'
      },
      img: {
        maxWidth: '100%'
      },
      input: {
        transparent: {
          border: 'none',
          boxShadow: 'none',
          resize: 'none',
          outline: 0,
          '&:hover': {
            border: 'none',
            boxShadow: 'none',
            resize: 'none',
            outline: 0
          },
          '&:active': {
            border: 'none',
            boxShadow: 'none',
            resize: 'none',
            outline: 0
          },
          '&:focus': {
            border: 'none',
            boxShadow: 'none',
            resize: 'none',
            outline: 0
          },
          '&:disabled': {
            opacity: 0.8,
            cursor: 'not-allowed'
          }
        }
      },
      WidgetContainer: {
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
        overflow: 'hidden'
      },
      WidgetToggleContainer: {
        position: 'fixed',
        zIndex: 2147483003,
        bottom: '20px',
        right: '20px'
      },
      WidgetToggle: {
        outline: 'none',
        border: 'none',
        userSelect: 'none',
        cursor: 'pointer',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  };
};

var defaultProvider = {
  isOpen: false,
  toggle: function toggle() {
    return null;
  }
};
var ChatContext = React.createContext(defaultProvider);
var ChatProvider = function ChatProvider(_ref) {
  var children = _ref.children,
    primaryColor = _ref.primaryColor;
  var _React$useState = React.useState(false),
    isOpen = _React$useState[0],
    setIsOpen = _React$useState[1];
  var theme = getThemeConfig({
    primary: primaryColor || "1890ff"
  });
  var values = {
    isOpen: isOpen,
    toggle: function toggle() {
      setIsOpen(!isOpen);
    }
  };
  return React.createElement(themeUi.ThemeUIProvider, {
    theme: theme
  }, React.createElement(ChatContext.Provider, {
    value: values
  }, children));
};
var useChatContext = function useChatContext() {
  var context = React.useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};

var Path = function Path(props) {
  return React__default.createElement(framerMotion.motion.path, Object.assign({
    fill: 'transparent',
    strokeWidth: '3',
    stroke: 'hsl(0, 0%, 99%)',
    strokeLinecap: 'round'
  }, props));
};
var DefaultToggleIcon = function DefaultToggleIcon() {
  return React__default.createElement("svg", {
    width: '27',
    height: '27',
    viewBox: '0 0 27 27'
  }, React__default.createElement(Path, {
    variants: {
      closed: {
        opacity: 0,
        d: 'M 7.5 14.5 L 19 14.5'
      },
      open: {
        opacity: 1,
        d: 'M 7 7 L 20 20'
      }
    },
    transition: {
      duration: 0.2
    }
  }), React__default.createElement(Path, {
    variants: {
      closed: {
        opacity: 0,
        d: 'M 7.5 8.5 L 19 8.5'
      },
      open: {
        opacity: 1,
        d: 'M 7 20 L 20 7'
      }
    },
    transition: {
      duration: 0.2
    }
  }), React__default.createElement(Path, {
    d: 'M22 21.6453C22 20 23 19.5 23 19.5C23 19.5 25.5 18 25.5 14V9C25.5 4 23 1.5 18 1.5H9C4 1.5 1.5 4 1.5 9V14C1.5 19 4 21 9 21H13.5C14 21 14 21 15 21.5L20.25 24.8572L20.8517 25.2118C21.5184 25.6046 22 25.631 22 24.8572V24.0287V22.7858V21.6453Z',
    variants: {
      closed: {
        opacity: 1
      },
      open: {
        opacity: 0
      }
    },
    transition: {
      duration: 0.2
    }
  }));
};
var ToggleIconFilled = function ToggleIconFilled() {
  return React__default.createElement("svg", {
    width: '24',
    height: '25',
    viewBox: '0 0 24 25',
    fill: 'none'
  }, React__default.createElement(Path, {
    variants: {
      closed: {
        opacity: 0,
        d: 'M 7.5 14.5 L 19 14.5'
      },
      open: {
        opacity: 1,
        d: 'M 5 5 L 20 20'
      }
    },
    transition: {
      duration: 0.2
    }
  }), React__default.createElement(Path, {
    variants: {
      closed: {
        opacity: 0,
        d: 'M 7.5 8.5 L 19 8.5'
      },
      open: {
        opacity: 1,
        d: 'M 5 20 L 20 5'
      }
    },
    transition: {
      duration: 0.2
    }
  }), React__default.createElement(framerMotion.motion.path, {
    d: 'M20.5 21.1453C20.5 19.5 21.5 19 21.5 19C21.5 19 24 18.5 24 13.5V8.5C24 3.5 21.5 1 16.5 1H7.5C2.5 1 0 3.5 0 8.5V13.5C0 18.5 2.5 20.5 7.5 20.5H12C12.5 20.5 12.5 20.5 13.5 21L18.75 24.3572L19.3517 24.7118C20.0184 25.1046 20.5 25.131 20.5 24.3572V23.5287V22.2858V21.1453Z',
    fill: 'white',
    fillOpacity: '0.7',
    variants: {
      closed: {
        opacity: 1
      },
      open: {
        opacity: 0
      }
    },
    transition: {
      duration: 0.2
    }
  }), React__default.createElement(framerMotion.motion.path, {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M21.5 18C21.5 18 20.5 18.5 20.5 20.1453V21.2858V22.5287V23.3572C20.5 24.131 20.0184 24.1046 19.3517 23.7118L18.75 23.3572L13.5 20C12.8174 19.6587 12.6007 19.5504 12.3729 19.516C12.267 19.5 12.1587 19.5 12 19.5H7.5C2.5 19.5 0 17.5 0 12.5V7.5C0 2.5 2.5 0 7.5 0H16.5C21.5 0 24 2.5 24 7.5V12.5C24 17.5 21.5 18 21.5 18ZM21 17.557C21.8581 17.557 24 13.557 23 13.057C22.3869 12.7505 21.8801 13.7414 21.4646 14.554C21.2023 15.0668 20.9764 15.5086 20.783 15.5086C20.283 15.5086 20 16.0554 20 16.7568C20 17.4582 20.1419 17.557 21 17.557Z',
    fill: 'white',
    variants: {
      closed: {
        opacity: 1
      },
      open: {
        opacity: 0
      }
    },
    transition: {
      duration: 0.2
    }
  }));
};
var DefaultCloseIcon = function DefaultCloseIcon() {
  return React__default.createElement("svg", {
    width: '27',
    height: '27',
    viewBox: '0 0 27 27'
  }, React__default.createElement(Path, {
    variants: {
      closed: {
        opacity: 0,
        d: 'M 7.5 14.5 L 19 14.5'
      },
      open: {
        opacity: 1,
        d: 'M 7 7 L 20 20'
      }
    },
    transition: {
      duration: 0.2
    }
  }), React__default.createElement(Path, {
    variants: {
      closed: {
        opacity: 0,
        d: 'M 7.5 8.5 L 19 8.5'
      },
      open: {
        opacity: 1,
        d: 'M 7 20 L 20 7'
      }
    },
    transition: {
      duration: 0.2
    }
  }));
};
var ToggleIcon = function ToggleIcon(_ref) {
  var isOpen = _ref.isOpen,
    customIconUrl = _ref.customIconUrl,
    iconVariant = _ref.iconVariant;
  if (!customIconUrl) {
    return iconVariant === 'filled' ? React__default.createElement(ToggleIconFilled, null) : React__default.createElement(DefaultToggleIcon, null);
  }
  if (isOpen) {
    return React__default.createElement(DefaultCloseIcon, null);
  } else {
    return React__default.createElement(themeUi.Image, {
      src: customIconUrl,
      style: {
        maxHeight: 40,
        maxWidth: 40
      }
    });
  }
};
var WidgetToggle = function WidgetToggle(_ref2) {
  var isOpen = _ref2.isOpen,
    isDisabled = _ref2.isDisabled,
    customIconUrl = _ref2.customIconUrl,
    iconVariant = _ref2.iconVariant,
    style = _ref2.style,
    toggle = _ref2.toggle;
  return React__default.createElement(themeUi.Button, {
    className: 'Papercups-toggleButton',
    variant: 'primary',
    p: 0,
    style: style,
    sx: {
      variant: 'styles.WidgetToggle'
    },
    disabled: isDisabled,
    onClick: toggle,
    "aria-label": (isOpen ? 'Close' : 'Open') + " chat widget"
  }, React__default.createElement(ToggleIcon, {
    customIconUrl: customIconUrl,
    iconVariant: iconVariant,
    isOpen: isOpen
  }));
};

var DEFAULT_X_OFFSET = 20;
var IFRAME_URL = "https://chat-widget-nu.vercel.app";
var SAND_BOX = ["allow-scripts", "allow-popups", "allow-same-origin", "allow-forms"].join(" ");

var normalizePositionConfig = function normalizePositionConfig(position) {
  if (!position) {
    return {
      side: "right",
      offset: DEFAULT_X_OFFSET
    };
  }
  switch (position) {
    case "left":
      return {
        side: "left",
        offset: DEFAULT_X_OFFSET
      };
    case "right":
      return {
        side: "right",
        offset: DEFAULT_X_OFFSET
      };
    default:
      return position;
  }
};

var getDefaultStyles = function getDefaultStyles(styles, position) {
  if (styles === void 0) {
    styles = {};
  }
  var _styles = styles,
    _styles$chatContainer = _styles.chatContainer,
    chatContainerStyle = _styles$chatContainer === void 0 ? {} : _styles$chatContainer,
    _styles$toggleContain = _styles.toggleContainer,
    toggleContainerStyle = _styles$toggleContain === void 0 ? {} : _styles$toggleContain,
    _styles$toggleButton = _styles.toggleButton,
    toggleButtonStyle = _styles$toggleButton === void 0 ? {} : _styles$toggleButton;
  var _position$side = position.side,
    side = _position$side === void 0 ? "right" : _position$side,
    _position$offset = position.offset,
    offset = _position$offset === void 0 ? DEFAULT_X_OFFSET : _position$offset;
  switch (side) {
    case "left":
      return {
        chatContainer: _extends({
          left: offset,
          right: "auto"
        }, chatContainerStyle),
        toggleContainer: _extends({
          left: offset,
          right: "auto"
        }, toggleContainerStyle),
        toggleButton: toggleButtonStyle
      };
    case "right":
    default:
      return {
        chatContainer: _extends({
          right: offset,
          left: "auto"
        }, chatContainerStyle),
        toggleContainer: _extends({
          right: offset,
          left: "auto"
        }, toggleContainerStyle),
        toggleButton: toggleButtonStyle
      };
  }
};

function ChatWidgetContainer(props) {
  var title = props.title,
    query = props.query,
    styles = props.styles,
    position = props.position;
  var _useChatContext = useChatContext(),
    isOpen = _useChatContext.isOpen,
    toggle = _useChatContext.toggle;
  var positionConfig = normalizePositionConfig(position);
  var _getDefaultStyles = getDefaultStyles(styles, positionConfig),
    _getDefaultStyles$cha = _getDefaultStyles.chatContainer,
    chatContainerStyle = _getDefaultStyles$cha === void 0 ? {} : _getDefaultStyles$cha,
    _getDefaultStyles$tog = _getDefaultStyles.toggleContainer,
    toggleContainerStyle = _getDefaultStyles$tog === void 0 ? {} : _getDefaultStyles$tog,
    _getDefaultStyles$tog2 = _getDefaultStyles.toggleButton,
    toggleButtonStyle = _getDefaultStyles$tog2 === void 0 ? {} : _getDefaultStyles$tog2;
  return React.createElement(React.Fragment, null, React.createElement(framerMotion.motion.iframe, {
    className: 'chatWindowContainer',
    title: title || 'Welcome to Chat Widget',
    sandbox: SAND_BOX,
    animate:  'open' ,
    initial: 'closed',
    variants: {
      closed: {
        opacity: 0,
        y: 4
      },
      open: {
        opacity: 1,
        y: 0
      }
    },
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    },
    src: IFRAME_URL + "?" + query,
    style: isOpen ? _extends({
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
      overflow: 'hidden'
    }, chatContainerStyle) : {
      pointerEvents: 'none',
      height: 0,
      minHeight: 0,
      border: 'none'
    }
  }, "Loading..."), React.createElement(framerMotion.motion.div, {
    className: 'toggleButtonContainer',
    style: _extends({
      position: 'fixed',
      zIndex: 2147483003,
      bottom: '20px',
      right: '20px'
    }, toggleContainerStyle),
    initial: false,
    animate: isOpen ? 'open' : 'closed'
  }, React.createElement(WidgetToggle, {
    style: _extends({
      outline: 'none !important',
      border: 'none !important',
      userSelect: 'none !important',
      cursor: 'pointer',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }, toggleButtonStyle),
    isOpen: isOpen,
    iconVariant: 'filled',
    toggle: toggle
  })));
}

function isMobileDevice() {
  if (typeof window === 'undefined') {
    return false;
  }
  var mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(window.navigator.userAgent);
}

function generateQueryParams(paramsObject) {
  var queryParams = [];
  for (var key in paramsObject) {
    if (paramsObject.hasOwnProperty(key)) {
      var value = paramsObject[key];
      queryParams.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
    }
  }
  return queryParams.join('&');
}

var ChatWidget = function ChatWidget(props) {
  var _props$companyName = props.companyName,
    companyName = _props$companyName === void 0 ? '' : _props$companyName,
    _props$customerId = props.customerId,
    customerId = _props$customerId === void 0 ? '' : _props$customerId,
    _props$showAgentAvail = props.showAgentAvailability,
    showAgentAvailability = _props$showAgentAvail === void 0 ? false : _props$showAgentAvail,
    _props$title = props.title,
    title = _props$title === void 0 ? "Welcome" : _props$title,
    _props$subtitle = props.subtitle,
    subtitle = _props$subtitle === void 0 ? "Hi, how can I help you today?" : _props$subtitle,
    _props$primaryColor = props.primaryColor,
    primaryColor = _props$primaryColor === void 0 ? "1890ff" : _props$primaryColor,
    _props$position = props.position,
    position = _props$position === void 0 ? 'right' : _props$position,
    _props$styles = props.styles,
    styles = _props$styles === void 0 ? {} : _props$styles;
  var isMoblie = isMobileDevice();
  var query = generateQueryParams({
    title: title,
    companyName: companyName,
    customerId: customerId,
    showAgentAvailability: showAgentAvailability,
    subtitle: subtitle,
    primaryColor: primaryColor,
    isMoblie: isMoblie
  });
  return React.createElement(ChatProvider, {
    primaryColor: primaryColor
  }, React.createElement(ChatWidgetContainer, {
    title: title,
    query: query,
    position: position,
    styles: styles
  }));
};

exports.ChatWidget = ChatWidget;
exports.default = ChatWidget;
//# sourceMappingURL=index.js.map
