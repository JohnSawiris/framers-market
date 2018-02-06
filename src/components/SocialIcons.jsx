import React from 'react';
import PropTypes from 'prop-types';
import FaAndroid from 'react-icons/lib/fa/android';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import TiSocialInstagram from 'react-icons/lib/ti/social-instagram';
import TiSocialLinkedin from 'react-icons/lib/ti/social-linkedin';

function SocialIcons() {
  const socialStyles = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row'
  }

  const iconStyles ={
    fontSize: '35px',
    marginLeft: '10px'
  }

  return(
    <div>
      <ul style={socialStyles}>
        <li style={iconStyles}><FaAndroid/></li>
        <li style={iconStyles}><FaFacebookSquare/></li>
        <li style={iconStyles}><TiSocialInstagram/></li>
        <li style={iconStyles}><TiSocialLinkedin/></li>
      </ul>
    </div>
  );
}


export default SocialIcons;
