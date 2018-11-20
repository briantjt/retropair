import React, { Component } from "react";
import InputBar from "./InputBar";
import "./App.css";
import pairs from "./pairs";
import PairMap from "./PairMap";

const createOption = label => ({
  label,
  value: label
});
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      value: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.createPairs = this.createPairs.bind(this);
  }

  handleChange = (value, actionMeta) => {
    console.group("Value Changed");
    console.log(value);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ value });
  };

  handleInputChange = inputValue => {
    this.setState({ inputValue });
  };

  handleKeyDown = event => {
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    // eslint-disable-next-line default-case
    switch (event.key) {
      case "Enter":
      case "Tab":
        console.group("Value Added");
        console.log(value);
        console.groupEnd();
        this.setState({
          inputValue: "",
          value: [...value, createOption(inputValue)]
        });
        event.preventDefault();
    }
  };

  createPairs() {
    const { value } = this.state;
    let pairings = pairs(value.map(object => object.value));
    console.log(pairings);
    this.setState({ pairings });
  }
  render() {
    const state = {
      inputValue: this.state.inputValue,
      value: this.state.value
    };
    return (
      <div className="App">
        <h1>Retrospective Pairings</h1>
        <InputBar
          state={state}
          handleKeyDown={this.handleKeyDown}
          handleInputChange={this.handleInputChange}
          handleChange={this.handleChange}
        />
        <button onClick={this.createPairs}>Pair Up!</button>
        {this.state.pairings
          ? this.state.pairings.map((pairs, index) => {
              return <PairMap pairs={pairs} round={index} key={index} />;
            })
          : null}
      </div>
    );
  }
}

export default App;
