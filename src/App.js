import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
// import Message from './components/Message';
// import Greet from './components/Greet'
// import Welcome from './components/welcome'
// import Hello from './components/Hello';
// import Welcome from './components/welcome';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter />
        {/* <Message /> */}
        {/* <Greet />
        <Welcome /> */}
        {/* <Hello name= 'ken' heroName='bat'>
          <p>This is a children props</p> 
        </Hello>
        <Hello name='kenny' heroName='cat'>
          <button>action</button>
        </Hello>
        
        <Hello name='kenken' heroName='mat'/>

        <Welcome name='kenny' heroName='ken'/>
        <Welcome name='kenn' heroName='kenn'/>
        <Welcome name='kenny' heroName='kenny'/> */}

      </div>
    );
  }
}

  

export default App;
