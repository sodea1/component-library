import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            time: this.props.time
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({ time: this.state.time + 1 });
    }

    render() {
        let { time } = this.state;

        return (
            <div>
                {time}
            </div>
        )
    }
}

export default Timer;