export function isMobileDevice(): boolean {
    // If running on the server, always return false (not mobile)
    if (typeof window === 'undefined') {
      return false;
    }
  
    // Regular expression to match common mobile user agents
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobileRegex.test(window.navigator.userAgent);
  }
  