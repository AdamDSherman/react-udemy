import { Component } from 'react';

class ErrorBoundry extends Component {
constructor() {
    super();
    this.state = { hasError: false};
}

    // Makes the component and 'error boundry' component
    componentDidCatch(error) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <p>something went wrong</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;
