import React, { useState } from "react";
import Select from 'react-select';


function CustomDropDown(props) {

  return (
    <div className="App">
      <Select
      placeholder={props.placeholder?props.placeholder:'Select'}
        defaultValue={props.selectedOption}
        onChange={props.setSelectedOption}
        options={props.options}
      />
    </div>
  );
}

export default CustomDropDown;
