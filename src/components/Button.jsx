import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return(
    <button style={props.bgColor} className="btn btn-success">{props.text}
    <style jsx>
      {`
        .btn {
          padding: .75rem;
          margin: 0.25rem;
          border-radius: 5px;
          font-size: 14px;
          border: none;
        }
        `}
    </style>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.object
}

export default Button;
