import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const initialState = {
  data: {},
  errors: {},
  input: '',
  exist: -1
};

export const reducer = (state= initialState, action) => {
  switch (action.type) {
    case 'PUT_DATA':
      return {
        ...state,
        data: action.payload.data,
      };
    case 'LOAD_DATA_FAILED': {
      return {
        ...state,
        errors: action.payload
      }
    }
    case 'INPUT_VALUE': {
      return  {
        ...state,
        input: action.payload.input,
        exist: action.payload.exist
      }
    }
    default:
      return state;
  }
};


export const store = createStore(reducer, applyMiddleware(logger, thunk))
