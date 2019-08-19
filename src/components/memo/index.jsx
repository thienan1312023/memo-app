import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { memoActions } from '../../actions/memo.actions';
const Memo = props => {
  const {memo, chooseMemo} = props;
  const handleSelect = () => {
      const memoColor = memo.color || '';
      chooseMemo(memo._id, memo.title, memo.content, memoColor);
  }
  return (
    <Card bg={memo.color} style={{ width: '18rem' }} onClick={handleSelect}>
      <Card.Body>
        <Card.Title>{memo.title}</Card.Title>
        <Card.Text>
          {memo.content}
        </Card.Text>
      </Card.Body>
    </Card>
  )

}

Memo.propTypes = {
  memo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  }).isRequired,
}

function mapState(state){
  const memo = state.memo;
  return memo;
}

const actionCreators = {
   chooseMemo: memoActions.chooseMemo
}

const connectedMemo = connect(mapState, actionCreators)(Memo);
export { connectedMemo as Memo };
