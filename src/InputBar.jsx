import React, { Component } from "react";

import CreatableSelect from "react-select/lib/Creatable";

const components = {
  DropdownIndicator: null
};


export default class CreatableInputOnly extends Component {
  render() {
    const { inputValue, value } = this.props.state;
    const {handleChange, handleInputChange, handleKeyDown} = this.props
    return (
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={handleChange}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type each person's name and press enter..."
        value={value}
      />
    );
  }
}
