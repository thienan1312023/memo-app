import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { memoActions } from '../../actions/memo.actions';
import { ConfirmDialog } from '../confirm-dialog';
const Memo = props => {
  const { memo, chooseMemo } = props;
  const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
  const handleSelect = () => {
    const memoColor = memo.color || '';
    chooseMemo(memo._id, memo.title, memo.content, memoColor);
  }

  const handleShowConfirmDialog = () => {
    setShowConfirmDialog(true);
  }

  const handleApproveRemove = () => {
    setShowConfirmDialog(false);
  }

  const handleCancelRemove = () => {
    setShowConfirmDialog(false);
  }
  return (
    <Fragment>
      <div className="bg-light mb-2" onClick={handleSelect}>
        <Card.Body>
          <Card.Title>{memo.title}</Card.Title>
          <Card.Text>
            {memo.content}
          </Card.Text>
        </Card.Body>
        
      </div>
      <i className="fa fa-trash" aria-hidden="true" key="removeMemo" onClick={() => handleShowConfirmDialog()}></i>
      <ConfirmDialog title="Confirm Dialog" 
                     description="Are you want to delete this memo?"
                     isShow={isShowConfirmDialog}
                     handleApprove={handleApproveRemove}
                     handleClose={handleCancelRemove}
                     >
      </ConfirmDialog>
    </Fragment>
  )

}

Memo.propTypes = {
  memo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  }).isRequired,
}

function mapState(state) {
  const memo = state.memo;
  return memo;
}

const actionCreators = {
  chooseMemo: memoActions.chooseMemo
}

const connectedMemo = connect(mapState, actionCreators)(Memo);
export { connectedMemo as Memo };
