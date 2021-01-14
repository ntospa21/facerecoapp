import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import webcam from './webcam.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
    <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 120, width: 150 }} >
   <div className="Tilt-inner pa3">
   <img style={{paddingTop: '5px'}} alt ='logo' src={webcam} />
   </div>
  </Tilt>
  <div className="footer">
  <footer id='footer'>&copy; Made with love from Ntos.</footer>
  </div>
  </div>

  );
}
export default Logo;
