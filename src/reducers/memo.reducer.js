import { memoConstants } from '../constants';

const initialStates = {
  id: {},
  title: '',
  content: '',
  color: ''
}
export default function (state = initialStates, action) {
  switch (action.type) {
    case memoConstants.CHOOSE_MEMO:
      return {
        ...state,
        memo: action.payload
      };
    default:
      return state;
  }
}