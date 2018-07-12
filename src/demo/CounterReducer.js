export default (state = {counter:0} , action) =>{
    switch (action.type){
        case "INCREMENT":
            console.log("increment in reducer ...")
            var newState = {counter:state.counter+1}
            return newState;
        case "DECREMENT":
            var newState = {counter:state.counter-1}
            return newState;
        default:
            return state;
    }

}