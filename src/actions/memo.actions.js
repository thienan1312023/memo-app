import { memoConstants } from '../memoConstants';
import Memo from '../models/memo.model';
export const memoActions = {
    chooseMemo
};

function chooseMemo(id, title, content, color) {
    const memo = new Memo(id, title, content, color);
    return { type: memoConstants.CHOOSE_MEMO, payload: memo };
}
