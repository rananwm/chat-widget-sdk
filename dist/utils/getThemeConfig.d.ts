declare type ThemeSettings = {
    primary?: string;
};
export declare const getThemeConfig: (settings: ThemeSettings) => {
    useBodyStyles: boolean;
    space: number[];
    fonts: {
        body: string;
        heading: string;
        monospace: string;
    };
    fontSizes: number[];
    fontWeights: {
        body: number;
        heading: number;
        bold: number;
    };
    lineHeights: {
        body: number;
        heading: number;
    };
    colors: {
        text: string;
        background: string;
        primary: string;
        darker: string;
        lighter: string;
        secondary: string;
        green: string;
        red: string;
        muted: string;
        gray: string;
        input: string;
        offset: string;
    };
    text: {
        default: {
            color: string;
            fontSize: number;
        };
        caps: {
            textTransform: string;
            letterSpacing: string;
        };
        heading: {
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
    };
    buttons: {
        primary: {
            cursor: string;
            outline: number;
            transition: string;
            background: string;
            borderColor: string;
            '&:hover': {
                background: string;
                borderColor: string;
            };
            '&:active': {
                background: string;
                borderColor: string;
            };
        };
        secondary: {
            cursor: string;
            outline: number;
            transition: string;
            background: string;
            color: string;
            borderColor: string;
            borderWidth: number;
            borderStyle: string;
            '&:hover': {
                color: string;
                background: string;
                borderColor: string;
            };
            '&:active': {
                background: string;
                borderColor: string;
            };
        };
        link: {
            cursor: string;
            outline: number;
            transition: string;
            backgroundColor: string;
            '&:hover': {
                backgroundColor: string;
                borderColor: string;
            };
            '&:active': {
                backgroundColor: string;
                borderColor: string;
            };
        };
    };
    styles: {
        root: {
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            fontSize: number;
        };
        h1: {
            color: string;
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            fontSize: number;
        };
        h2: {
            color: string;
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            fontSize: number;
        };
        h3: {
            color: string;
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            fontSize: number;
        };
        h4: {
            color: string;
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            fontSize: number;
        };
        h5: {
            color: string;
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            fontSize: number;
        };
        h6: {
            color: string;
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            fontSize: number;
        };
        p: {
            color: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
        a: {
            color: string;
            userSelect: string;
            '&:hover': {
                color: string;
            };
            '&:active': {
                color: string;
            };
        };
        pre: {
            fontFamily: string;
            overflowX: string;
            code: {
                color: string;
            };
        };
        code: {
            fontFamily: string;
            fontSize: string;
        };
        table: {
            width: string;
            borderCollapse: string;
            borderSpacing: number;
        };
        th: {
            textAlign: string;
            borderBottomStyle: string;
        };
        td: {
            textAlign: string;
            borderBottomStyle: string;
        };
        img: {
            maxWidth: string;
        };
        input: {
            transparent: {
                border: string;
                boxShadow: string;
                resize: string;
                outline: number;
                '&:hover': {
                    border: string;
                    boxShadow: string;
                    resize: string;
                    outline: number;
                };
                '&:active': {
                    border: string;
                    boxShadow: string;
                    resize: string;
                    outline: number;
                };
                '&:focus': {
                    border: string;
                    boxShadow: string;
                    resize: string;
                    outline: number;
                };
                '&:disabled': {
                    opacity: number;
                    cursor: string;
                };
            };
        };
        WidgetContainer: {
            margin: number;
            zIndex: number;
            position: string;
            bottom: number;
            right: number;
            width: number;
            maxWidth: string[];
            minHeight: number;
            maxHeight: string[];
            boxShadow: string;
            height: string;
            borderRadius: number;
            overflow: string;
        };
        WidgetToggleContainer: {
            position: string;
            zIndex: number;
            bottom: string;
            right: string;
        };
        WidgetToggle: {
            outline: string;
            border: string;
            userSelect: string;
            cursor: string;
            width: string;
            height: string;
            borderRadius: string;
            display: string;
            justifyContent: string;
            alignItems: string;
        };
    };
};
export default getThemeConfig;
