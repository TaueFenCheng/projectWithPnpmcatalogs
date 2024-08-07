'use client'
import React from "react";

class ErrorBoundary extends React.Component<any> {
  state:{
    hasError: boolean
  }
  constructor(props:Record<string, any> & {
    children: React.ReactNode | Element
  }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error:any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error:any, info:any) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logErrorToMyService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || 'error';
    }

    return this.props?.children || <></>;
  }
}

export default ErrorBoundary;
