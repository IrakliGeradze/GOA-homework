import React from "react";

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
        console.log("Error:", error);
        console.log("Component Stack:", info.componentStack);
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
        throw new Error("First Crash");
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
        throw new Error("Second Crash");
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
        <ErrorBoundary message="First component crashed 😢">
            <BuggyComponentOne />
        </ErrorBoundary>

        <ErrorBoundary message="Second component crashed 💥">
            <BuggyComponentTwo />
        </ErrorBoundary>
        </div>
    );
    }

/*
რატომ არის კარგი თითოეული risky კომპონენტის გარშემო ცალკე boundary:
თუ ერთ კომპონენტში error მოხდება, დანარჩენი აპლიკაცია მაინც იმუშავებს და არ დაიქრაშება მთლიანად.

როგორ აუმჯობესებს UX-ს reset ღილაკი:
მომხმარებელს შეუძლია კომპონენტის თავიდან ჩატვირთვა page refresh-ის გარეშე.
*/