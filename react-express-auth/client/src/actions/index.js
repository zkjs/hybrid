/**
 * Created by qinyejun on 6/18/16.
 */

import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types';

import { apiHost } from '../config';

export function signinUser({email, password}) {
  return function(dispatch) {
    axios.post(`${apiHost}/signin`, {email, password})
      .then(response => {
        // update state
        dispatch({ type: AUTH_USER });
        // save the jwt token
        localStorage.setItem('token', response.data.token);
        // redirect to '/feature'
        browserHistory.push('/feature')
      })
      .catch(() => {
        dispatch(authError('Bad Login'));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER }
}

export function signupUser({email, password}) {
  return function(dispatch) {
    axios.post(`${apiHost}/signup`, {email, password})
      .then(response => {
        dispatch({type: AUTH_USER });
        localStorage.setItem('token',response.data.token);
        browserHistory.push('/');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(apiHost, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then( response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  }
}