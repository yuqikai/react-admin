import React, {Component} from 'react'

class Counter extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {counter, doIncrement , doDecrement} = this.props
        return (
            <div>
                <p>
                    Clicked: {counter} times
                    {' '}
                    <button onClick={doIncrement}>
                    +
                    </button>
                    {' '}
                    <button onClick={doDecrement}>
                    -
                    </button>
                </p>
            </div>
        )
    }
}

export default Counter;