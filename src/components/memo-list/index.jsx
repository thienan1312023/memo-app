import React from 'react'
import PropTypes from 'prop-types'
import Memo from '../memo';

const MemoList = ( {memos}) => {
  return (
    <div>
        {
          memos.length > 0 && memos.map(memo => (
          <div key={memo.key} timeout={300} classNames="item">
            <Memo
              memo={memo}
              // onUpdate={updateMemo}
              // onDelete={deleteMemo}
            />
          </div>
        ))}
    </div>
  )
}

//MemoList.propTypes = {
  //memos: PropTypes.arrayOf(PropTypes.object).isRequired,
  //onScroll: PropTypes.func.isRequired,
  // updateMemo: PropTypes.func.isRequired,
  // deleteMemo: PropTypes.func.isRequired,
//}

export default MemoList
