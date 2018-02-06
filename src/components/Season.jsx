import React from 'react';
import PropTypes from 'prop-types';

function Season(props) {
  const seasonStyles= {
    margin: '1rem 3rem',
    padding: '10px',


  }
  return(
    <div style={seasonStyles}>
      <h1>{props.month}</h1>
      <h3>What to Plant: </h3>
      <div>{
        props.selection.map((item, i) =>
          <p key={i}>{item}</p>
        )
      }</div>
    </div>
  );
}

Season.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};

export default Season;
