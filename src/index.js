import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import ConnectedCounter from './demo/CounterAction.js'
import counterReducer from './demo/CounterReducer.js'

// redux 注入操作


const store = createStore(counterReducer)

const render = Component => {   // 增加react-hot-loader保持状态刷新操作，如果不需要可去掉并把下面注释的打开
    ReactDOM.render(
        <Provider store = {store}>
                <ConnectedCounter />
        </Provider>
        ,
        document.getElementById('root')
    );
};

render();

