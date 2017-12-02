import React, { Component } from 'react';
//import Header from './header.js';
import Button from './btn.js';
import Container from './container.js';
import NAVBAR from './NAV-BAR.js';
import Top from './top.js';
import Img from 'react-image';
import Main from './Main.js';
import LevelA from './LevelA.js';
import LevelB from './LevelB.js';
class App extends Component {
  render() {
    return (
    <Container>
   
    <Top></Top>
  
     <NAVBAR></NAVBAR>
  
         <Main></Main>
       
           <LevelA></LevelA>
        
           <LevelB></LevelB>
        
   </Container>
    );
  }
}

export default App;
