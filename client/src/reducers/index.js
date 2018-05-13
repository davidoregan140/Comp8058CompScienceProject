import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import invitesReducer from "./invitesReducer";
import guestsReducer from "./guestsReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  invites: invitesReducer,
  guests: guestsReducer
});
