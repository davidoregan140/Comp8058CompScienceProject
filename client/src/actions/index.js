import axios from "axios";
import { FETCH_USER, FETCH_INVITES, FETCH_GUESTS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitInvite = (values, history) => async dispatch => {
  const res = await axios.post("/api/invites", values);

  history.push("/invites");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchInvites = () => async dispatch => {
  const res = await axios.get("/api/invites");

  dispatch({ type: FETCH_INVITES, payload: res.data });
};

export const fetchGuests = () => async dispatch => {
  const res = await axios.get("/api/guests");

  dispatch({ type: FETCH_GUESTS, payload: res.data });
};

export const submitGuest = (values, history) => async dispatch => {
  const res = await axios.post("/api/guests", values);

  history.push("/guests");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteGuest = id => async dispatch => {
  let { data } = await axios.delete(`/api/guests/delete/${id}`);
  dispatch({ type: FETCH_GUESTS, payload: data });
};

export const deleteInvite = id => async dispatch => {
  let { data } = await axios.delete(`/api/invites/delete/${id}`);
  dispatch({ type: FETCH_INVITES, payload: data });
};
