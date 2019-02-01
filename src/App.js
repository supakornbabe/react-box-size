import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.boxRef = React.createRef()
    this.state={
      height : null,
      width : null,
    }
    this.getSize = this.getSize.bind(this)
  }
  getSize = e => {
    this.setState({
      height: this.boxRef.current.clientHeight,
      width: this.boxRef.current.clientWidth,
    })
  }
  componentDidMount(){
    window.addEventListener('resize',this.getSize)
    this.getSize()
  }
  render() {
    return(
      <>
        <div className="outer-box">
          <div className="box" id='box' ref={this.boxRef} > 
            <p>{this.state.width} * {this.state.height} </p>
          </div>
        </div>
      </>
    ) 
  }
}

export default App;