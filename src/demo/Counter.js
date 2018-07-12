import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const {value, onIncrement , onDecrement} = this.props
        console.log("in render ...")
        console.log(this.props)
        return (
            <div>
                <p>
                    Clicked: {value.counter} times
                    {' '}
                    <button onClick={onIncrement}>
                    +
                    </button>
                    {' '}
                    <button onClick={onDecrement}>
                    -
                    </button>
                    {' '}
                    <button >
                    Increment if odd
                    </button>
                    {' '}
                    <button >
                    Increment async
                    </button>
                </p>
            </div>
        )
    }

}

export default Counter