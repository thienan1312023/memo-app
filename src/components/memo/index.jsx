import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { memoActions } from '../actions';
const Memo = ({ memo }) => {
  // const handleDelete = () => {
  //     onDelete(memo.id);
  // }

  const handleSelect = () => {
      onUpdate(memo.id, memo.title, memo.content);
  }
  console.log({ memo });
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
  const { chooseMemo } = state.
}

const actionCreators = {
  
}
export default Memo
