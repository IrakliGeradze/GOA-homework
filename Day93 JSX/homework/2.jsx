import React from "react";

function sendErrorToServer(errorData) {
  console.log("Sending error to server...");

  console.log({
    message: errorData.message,
    stack: errorData.stack,
    time: errorData.time,
  });
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    sendErrorToServer({
      message: error.message,
      stack: info.componentStack,
      time: Date.now(),
    });
  }

  resetError = () => {
    this.setState({
      hasError: false,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>{this.props.message}</h1>

          <button onClick={this.resetError}>
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

class BuggyComponentOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      crash: false,
    };
  }

  render() {
    if (this.state.crash) {
      throw new Error("First Component Crash");
    }

    return (
      <button onClick={() => this.setState({ crash: true })}>
        Crash First Component
      </button>
    );
  }
}

class BuggyComponentTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      crash: false,
    };
  }

  render() {
    if (this.state.crash) {
      throw new Error("Second Component Crash");
    }

    return (
      <button onClick={() => this.setState({ crash: true })}>
        Crash Second Component
      </button>
    );
  }
}

export default function App() {
  return (
    <div>
      <ErrorBoundary message="First component failed">
        <BuggyComponentOne />
      </ErrorBoundary>

      <ErrorBoundary message="Second component failed">
        <BuggyComponentTwo />
      </ErrorBoundary>
    </div>
  );
}

/*
რატომ არის error logging მნიშვნელოვანი production-ში:
რადგან developer-ს შეუძლია ნახოს რეალური მომხმარებლების errors და სწრაფად გამოასწოროს პრობლემები.

როგორ ეხმარება debugging-ს რეალურ პროექტებში:
ინახება error message, stack და დრო, ამიტომ მარტივდება პრობლემის პოვნა და გამეორება.

რა განსხვავებაა UI fallback-სა და error monitoring-ს შორის:
UI fallback მომხმარებელს აჩვენებს უსაფრთხო ინტერფეისს,
ხოლო error monitoring developer-ს აწვდის ინფორმაციას შეცდომის შესახებ.
*/