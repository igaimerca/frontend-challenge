import React, { useState } from 'react';
import Select from 'react-select';
import "./SelectInput.scss"

export default function SelectInput({options, placeholder}) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        placeholder={placeholder}
        onChange={setSelectedOption}
        className="select-control"
        options={options}
      />
    </div>
  );
}