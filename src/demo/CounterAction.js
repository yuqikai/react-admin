
import {bindActionCreators, createStore} from "redux"
import {Provider, connect} from "react-redux"
import Counter from './Counter.js'


function doIncrement(){
    return {
        type:"INCREMENT"
    }
}


function doDecrement(){
    return {
        type:"DECREMENT"
    }
}


function mapStateToProps(state){
    return {
        counter:state.counter
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({doIncrement, doDecrement} , dispatch)
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default ConnectedCounter