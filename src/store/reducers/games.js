/* eslint-disable import/no-anonymous-default-export */

import { SEARCH_GAMES } from "../actions/actionTypes";

const initialState = {
  data: [],
  isSearching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_GAMES: {
      return {
        ...state,
        isSearching: true
      };
    }
    default:
      return state;
  }
}
