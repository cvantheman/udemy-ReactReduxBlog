import _ from 'lodash';
import { FETCH_POSTS, CREATE_POST, FETCH_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      const payloadData = action.payload.data;
      return { ...state, [payloadData.id]: payloadData }
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case CREATE_POST:
      return state;
    default:
      return state;
  }
}