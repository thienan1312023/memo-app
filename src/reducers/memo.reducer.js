import { memoConstants } from '../constants';

const initialStates = {
  memoSelected: {}
};
export default function (state = initialStates, action) {
  switch (action.type) {
    case memoConstants.CHOOSE_MEMO:
      return {
        ...state,
        memoSelected : action.payload
      };
    case memoConstants.FETCH_MEMOS:
      return {
        ...state
      }
    default:
      return state;
  }
}