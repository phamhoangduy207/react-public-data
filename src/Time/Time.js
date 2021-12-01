import React from "react";
import "../Time/Time.css";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), color: "red" };
    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    document.title = `${this.state.color}`;
  }
  componentDidUpdate() {
    document.title = `${this.state.color}`;
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  changeColor() {
    const newColor = this.state.color === "red" ? "blue" : "red";
    this.setState({
      color: newColor,
    });
  }

  render() {
    return (
      <div className="clock">
        <h2 onClick={this.changeColor} style={{ color: this.state.color }}>
          {this.state.date.toLocaleTimeString()}
        </h2>
      </div>
    );
  }
}

export default Time;
