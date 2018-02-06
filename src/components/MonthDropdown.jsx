import React from 'react';

function MonthDropdown() {
  const dropdownStyles = {
    width: '50%',
    marginBottom: '1rem'
  }
  return(
    <select className="form-control"style={dropdownStyles}>
      <option value=''>Select a month</option>
      <option value='Jan'>January</option>
      <option value='Feb'>February</option>
    </select>
  );
}

export default MonthDropdown;
