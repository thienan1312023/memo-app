import { memoConstants } from '../constants/memo.constants';
import Memo from '../models/memo.model';
export const memoActions = {
    chooseMemo,
    fetchMemos,
    createMemo
};

function chooseMemo(id, title, content, color) {
    const memo = new Memo(id, title, content, color);
    return { type: memoConstants.CHOOSE_MEMO, payload: memo };
}

function fetchMemos(isReLoadData){
    return {type: memoConstants.FETCH_MEMOS, payload: isReLoadData};    
}

function createMemo(isCreateMemo){
    return {type: memoConstants.CREATE_MEMO, payload: isCreateMemo}
}