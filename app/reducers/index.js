// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loopReducer from './loop';
import notificationReducer from './notification';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    loop: loopReducer,
    notification: notificationReducer
  });
}
