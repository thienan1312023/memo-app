import { memoConstants } from '../constants';

const initialStates = {
  memoSelected: {},
  isReLoadData: false
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
        ...state, 
        isReLoadData: action.payload
      }
    default:
      return state;
  }
}