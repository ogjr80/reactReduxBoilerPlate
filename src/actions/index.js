import axios from "axios";
import { FETCH_DATA } from "./types";

export const fetchData = () => async dispatch => {
  const res = await require('./data.json');
  dispatch({ type: FETCH_DATA, payload: res });
};
