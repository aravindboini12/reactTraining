import React, { Component } from 'react'

class CBCPropEx1 extends Component {
  render() {
    console.log(this);
    
    return (
      <div>CBCPropEx1
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        <button onClick={this.props.sendFun}>click</button>
      </div>
    )
  }
}

export default CBCPropEx1