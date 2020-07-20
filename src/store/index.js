import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas';


const developmentMiddleware = [];

const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(...[sagaMiddleware, ...developmentMiddleware])
));


sagaMiddleware.run(sagas);

export default store;