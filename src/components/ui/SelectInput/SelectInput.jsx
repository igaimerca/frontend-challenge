import React, { useState } from 'react';
import Select from 'react-select';
import "./SelectInput.scss"

const options = [
  { value: 'Option1', label: 'Option1' },
  { value: 'Option2', label: 'Option2' },
  { value: 'Option3', label: 'Option3' },
];

export default function SelectInput() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        placeholder="Filter Options"
        onChange={setSelectedOption}
        className="select-control"
        options={options}
      />
    </div>
  );
}