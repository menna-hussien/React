import React,{component} from 'react';
import img from './happy2.jpg';
class Main extends React.Component {
   render() {
      return (
      	<div className="container-fluid">
          <div className="row">
            <img className="col-xs-12" src={img}></img>
            </div>
            </div>
      );
   }
}
export default Main;