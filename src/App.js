import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Age <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};
const mapDispathToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "Age_Up" }),
    onAgeDown: () => dispatch({ type: "Age_Down" })
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
