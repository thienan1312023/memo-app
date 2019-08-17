import React from 'react'
import PropTypes from 'prop-types'
import Memo from '../memo';

const MemoList = ({ memos, updateMemo, deleteMemo }) => {
  return (
    <div>
      <TransitionGroup>
        {memos.map(memo => (
          <CSSTransition key={memo.id} timeout={300} classNames="item">
            <Memo
              memo={memo}
              onUpdate={updateMemo}
              onDelete={deleteMemo}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

MemoList.propTypes = {
  memos: PropTypes.arrayOf(PropTypes.object).isRequired,
  //onScroll: PropTypes.func.isRequired,
  updateMemo: PropTypes.func.isRequired,
  deleteMemo: PropTypes.func.isRequired,
}

export default MemoList
