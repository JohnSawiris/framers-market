import React from 'react';
import PropTypes from 'prop-types';

function Day(props) {

  const dayStyles ={
    fontFamily: 'sans-serif',
    color: '#569981',
    backgroundColor: 'honeydew',
    fontSize: '20px',
    margin: '1rem 0',
    padding: '1rem',
    listStyle: 'none'
  };

  return(
    <div>
      <ul style={dayStyles}>
        <li><span className="different-color">Day of the week:</span> {props.day}</li>
        <li>Location :{props.location}</li>
        <li>Hours: {props.hours}</li>
        <li>Booth: {props.booth}</li>
      </ul>
      <style jsx>{`
          .different-color {
            color: blue;
          }
      `}</style>
    </div>
  );
}

Day.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Day;
