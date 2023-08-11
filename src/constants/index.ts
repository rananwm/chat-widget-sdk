export const DEFAULT_X_OFFSET = 20;
export const IFRAME_URL = "https://chat-widget-nu.vercel.app";
export const SAND_BOX = [
    // Allow scripts to load in iframe
    "allow-scripts",
    // Allow opening links from iframe
    "allow-popups",
    // Needed to access localStorage
    "allow-same-origin",
    // Allow form for message input
    "allow-forms",
  ].join(" ");