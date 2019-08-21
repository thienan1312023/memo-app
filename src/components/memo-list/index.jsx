import React from 'react'
import PropTypes from 'prop-types'
import {Memo} from '../memo';
const MemoListStyle = {
  overflowY: 'scroll',
  maxHeight: '80vh'
}
const MemoList = ( {memos}) => {
  return (
    <div style={MemoListStyle}>
        {
          memos.length > 0 && memos.map(memo => (
          <div key={memo._id}>
            <Memo
              memo={memo}
            />
          </div>
        ))}
    </div>
  )
}

MemoList.propTypes = {
  memos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default MemoList
