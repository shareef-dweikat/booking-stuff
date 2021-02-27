import { combineReducers } from 'redux';
import auth, { Interface as authInterface } from './auth';
import date, { Interface as dateInterface } from './date';
import main, { Interface as mainInterface } from './main';
const reducers = combineReducers({
  auth,
  main,
  date
});

export default reducers;

export interface Interface {
  auth: authInterface,
  main: mainInterface
  date: dateInterface

}
