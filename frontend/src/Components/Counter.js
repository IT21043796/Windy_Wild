import React from "react";

class Counter extends React.Component{
    constructor(){
        super();
        this.increment = this.increment.bind(this)
        this.state = {
            counter : 0
        }
    }
    increment(){
        this.setState({
            counter: this.state.counter +1
        })
    }

    render(){
        return(
            <div>
                <h2>Counter = {this.state.counter}</h2>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default Counter;