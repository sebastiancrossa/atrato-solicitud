import axios from 'axios';
import * as actions from './actionTypes';

export const submitForm = ({ title, body }) => async (dispatch, getState) => {
  // Call backend created from node

  dispatch({ type: actions.FORM_SUBMIT_START });
  try {
    return axios
      .post('http://localhost:4000/users', { title, body })
      .then(res => {
        console.log(res);
        dispatch({ type: actions.FORM_SUBMIT_SUCCESS });
      });
  } catch (err) {
    dispatch({ type: actions.FORM_SUBMIT_FAIL });
  }

  dispatch({ type: actions.FORM_SUBMIT_END });
};
