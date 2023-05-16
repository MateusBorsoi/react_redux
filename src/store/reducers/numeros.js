import { NUM_MIN_ALT, NUM_MAX_ALT } from "../actions/actionTypes";

const InitialState = {
  min: 0,
  max: 0,
};

export default function (state = InitialState, action) {
  switch (action.type) {
    case NUM_MIN_ALT:
      return {
        ...state,
        min: action.payload,
      };
    case NUM_MAX_ALT:
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
}
