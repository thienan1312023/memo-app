import { memoConstants } from '../constants/memo.constants';
import Memo from '../models/memo.model';
export const memoActions = {
    chooseMemo,
    fetchMemos
};

function chooseMemo(id, title, content, color) {
    const memo = new Memo(id, title, content, color);
    console.log(memo);
    return { type: memoConstants.CHOOSE_MEMO, payload: memo };
}

function fetchMemos(){
    return {type: memoConstants.FETCH_MEMOS};    
}