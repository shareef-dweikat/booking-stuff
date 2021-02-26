
import { createStore, applyMiddleware, compose,  } from 'redux';
import thunk from 'redux-thunk';
import reducers from './store/reducer';

declare var window: any;

const client = {
  baseURL: 'https://api.letstok.com/',
  responseType: 'json',
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(reducers);
export default createStore(reducers, applyMiddleware(thunk));
