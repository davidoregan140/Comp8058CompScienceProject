import axios from 'axios';
import { FETCH_USER, FETCH_INVITES } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitInvite = (values, history) => async dispatch => {
  const res = await axios.post('/api/invites', values);

  history.push('/invites');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchInvites = () => async dispatch => {
  const res = await axios.get('/api/invites');

  dispatch({ type: FETCH_INVITES, payload: res.data });
};
