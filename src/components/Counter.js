import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
      
    }

    increment() {
        this.setState({
            count: this.state.count+1
        }, () => {console.log('callback value', this.state.count)
    }
    
    )
    // console.log(this.state.count)
    
}

    incrementFive(){
        this.setState({
            count: this.state.count+5
        })
    }
  render() {
    return( <div>
        <div>
            Count - {this.state.count}
            
        </div>
        <button onClick={() => this.incrementFive()}>Increment</button>
    </div>
    
     
    )
  }
}

export default Counter