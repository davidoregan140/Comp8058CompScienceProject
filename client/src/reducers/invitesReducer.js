import { FETCH_INVITES } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_INVITES:
      return action.payload;
    default:
      return state;
  }
}
