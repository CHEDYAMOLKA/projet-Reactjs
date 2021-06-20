import React,{Component} from 'react';
import Test from './components/test'

import './App.css';
import MyCars from './components/MyCars';
class App extends Component {
  render(){
    return (
      <div className="App">
    <MyCars></MyCars>
      <Test></Test>
      </div>
    );
  }
  
}

export default App;
