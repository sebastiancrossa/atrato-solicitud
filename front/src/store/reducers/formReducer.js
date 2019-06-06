import * as actions from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FORM_SUBMIT_START:
      return {
        ...state,
        loading: true
      };

    case actions.FORM_SUBMIT_END:
      return {
        ...state,
        loading: false
      };

    case actions.FORM_SUBMIT_FAIL:
      return {
        ...state,
        error: payload
      };

    case actions.FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        error: false
      };

    default:
      return state;
  }
};
