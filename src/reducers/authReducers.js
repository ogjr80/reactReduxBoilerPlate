import {FETCH_DATA} from '../actions/types';

export default function authReducers(state=[], action){
  switch(action.type){
    case FETCH_DATA:
    return action.payload;
    default:
      return state
  }

};
