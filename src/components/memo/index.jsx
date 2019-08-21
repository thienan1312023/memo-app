import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
import { API_BASE_MEMO } from '../../constants/api.constants';
import { memoActions } from '../../actions/memo.actions';
import { ConfirmDialog } from '../confirm-dialog';

const MemoStyle = styled.div`
    background-color: #ffffff
    border-style: ridge
    border-width: 0.5px;
    :hover{
      background-color: #e3e1e1
    }
    .memo__remove{
      display: flex;
      justify-content: space-between
      padding: 0 25px 10px 20px;
      i.fa-trash{
        :hover{
          color: red
        }
        color: #f87249;
      }

    }
`
const Memo = props => {
  const { memo, chooseMemo, createMemo } = props;
  //memo.date = moment(memo.date).format('MMMM Do YYYY');
  const isValid = moment(memo.date, 'MMMM Do YYYY', true).isValid();
  if (!isValid){
    memo.date = moment(memo.date).format('MMMM Do YYYY')
  }
const [isShowConfirmDialog, setShowConfirmDialog] = useState(false);
const handleSelect = () => {
  const memoColor = memo.color || '';
  chooseMemo(memo._id, memo.title, memo.content, memoColor);
  createMemo(false);
}

const handleShowConfirmDialog = () => {
  setShowConfirmDialog(true);
}

const handleApproveRemove = () => {
  setShowConfirmDialog(false);
  axios.delete(`${API_BASE_MEMO}${memo._id}/delete`, { ...memo })
    .then(res => {
      console.log(res);
      props.fetchMemos(true);
    }).catch((error) => {
      console.log(error);
    });
}

const handleCancelRemove = () => {
  setShowConfirmDialog(false);
}
return (
  <Fragment>
    <MemoStyle onClick={handleSelect}>
      <Card.Body>
        <Card.Title>{memo.title}</Card.Title>
        <Card.Text>
          {memo.content}
        </Card.Text>
      </Card.Body>
      <div className="memo__remove">
        <i className="fa fa-trash" aria-hidden="true" key="removeMemo" onClick={() => handleShowConfirmDialog()}></i>
        <span>{memo.date}</span>
      </div>
    </MemoStyle>
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
  chooseMemo: memoActions.chooseMemo,
  fetchMemos: memoActions.fetchMemos,
  createMemo: memoActions.createMemo
}

const connectedMemo = connect(mapState, actionCreators)(Memo);
export { connectedMemo as Memo };
