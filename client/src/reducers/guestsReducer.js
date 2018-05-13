import { FETCH_GUESTS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_GUESTS:
      return action.payload;
    default:
      return state;
  }
}
