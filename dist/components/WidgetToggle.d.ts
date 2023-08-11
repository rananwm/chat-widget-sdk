import React, { CSSProperties } from 'react';
export declare const ToggleIconFilled: () => React.JSX.Element;
export declare const WidgetToggle: ({ isOpen, isDisabled, customIconUrl, iconVariant, style, toggle, }: {
    isOpen?: boolean | undefined;
    isDisabled?: boolean | undefined;
    customIconUrl?: string | undefined;
    iconVariant?: "filled" | "outlined" | undefined;
    style: CSSProperties;
    toggle: () => void;
}) => React.JSX.Element;
export default WidgetToggle;
