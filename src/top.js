import React, { Component } from 'react';
import img from './happy.jpg';

class Top extends React.Component {
   render() {
      return (
      	
      	<div id="c4">
            <img id="c1" className="center-block img-circle" src={img} height="350" width="350" ></img>
         </div>
      );
   }
}
export default Top;