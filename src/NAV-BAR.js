import React,{component} from 'react';
/*class Header extends React.Component {
   render() {
      return (
            <h1>{this.props.children}</h1>
      );
   }
}
export default Header;*/
class NAVBAR extends React.Component {
   render() {
      return (
      <div className="navbar navbar-inverse">
      <div className="container-fluid">
   
         <div className="navbar-header">
         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">ACES</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">History<span className="sr-only">(current)</span></a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Sponsers</a></li>
        </ul>
        </div>
    </div>
</div>
      );
   }
}
export default NAVBAR;