import React from 'react';
import availableProduce from './SeasonArray';
// import MonthDropdown from './MonthDropdown';
import Season from './Season';

function Months() {
  const monthsStyle = {
    backgroundColor: 'purple',
    color: 'white',
    fontFamily: 'sans-serif',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
  const produce = availableProduce;
  return(
    <div style={monthsStyle}>{
      produce.map((item, i) =>
        <Season month={item.month}
          selection={item.selection}
          key={i}/>
      )}
    </div>
  );
}

export default Months;
