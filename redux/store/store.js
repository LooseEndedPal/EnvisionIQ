import { createStore } from 'redux';
import quoteReducer from '../reducers/quoteReducer'; 

const store = createStore(quoteReducer);

export default store;
