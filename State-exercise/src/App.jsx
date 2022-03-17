import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

export default class App extends Component {
  colors = ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]

 constructor() {
   super();
   this.state = {
     coloresDesordenados: [],
   }
 }
  
 shuffle = () => {
  const randomColorArray = this.colors.sort((a,b)=> 0.5 - Math.random());
  
   this.setState((prevState) => {
     return{
      coloresDesordenados: [...prevState.coloresDesordenados,...randomColorArray],
     }
   })
 }


  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={this.shuffle} />
      </div>

    )
  }
}