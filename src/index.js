import React from 'react';
import ReactDOM from 'react-dom';
import './style/lib/animate.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { AppContainer } from 'react-hot-loader';
import Page from './Page';

import Clock from './demo/Clock.js'
import Counter from './demo/Counter.js'
import counterReducer from './demo/CounterReducer.js'

// redux 注入操作


const store = createStore(counterReducer)


const render = Component => {   // 增加react-hot-loader保持状态刷新操作，如果不需要可去掉并把下面注释的打开
    ReactDOM.render(
        <Counter 
            value={store.getState()}
            onIncrement = {()=>{
                    console.log("click increment")
                    store.dispatch({type:"INCREMENT"})
                }
            }

            onDecrement = {()=>store.dispatch({type:"DECREMENT"})}
        />
        ,
        document.getElementById('root')
    );
};

render(Page);
store.subscribe(render)
