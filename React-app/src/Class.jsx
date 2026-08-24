import { Component } from "react";

class ClassCounter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }

    decrement() {
        this.setState({count: this.state.count - 1});
    }

    render(){
        return(
            <>
                <div>
                    <h1>Count: {this.state.count}</h1>
                    <button onClick={this.increment}>+ Add</button>
                    <button onClick={this.decrement}>- Subtract</button>
                </div>
            </>
        )
    }
}

export default ClassCounter