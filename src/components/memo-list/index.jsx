import React from 'react'
import PropTypes from 'prop-types'
import {Memo} from '../memo';

const MemoList = ( {memos}) => {
  return (
    <div>
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
