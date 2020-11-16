import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const initialState = {
  data: {},
  sortedData: {},
  errors: {},
  input: '',
  exist: -1,
  imageData: ""
};

export const reducer = (state= initialState, action) => {
  switch (action.type) {
    case 'PUT_DATA':
      return {
        ...state,
        data: action.payload.data,
      };
    case 'PUT_SORTED_DATA':
      return {
        ...state,
        sortedData: action.payload.data,
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
    case 'PUT_IMAGE_DATA': {
      return  {
        ...state,
        imageData: action.payload.data[0].url
      }
    }
    default:
      return state;
  }
};


export const store = createStore(reducer, applyMiddleware(logger, thunk))
