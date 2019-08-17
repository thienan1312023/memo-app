import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import { Button, ButtonGroup } from '@blueprintjs/core'
import {Card} from 'react-bootstrap';
const Memo = ({memo}) => {
    // const handleDelete = () => {
    //     onDelete(memo.id);
    // }

    // const handleUpdate = () => {
    //     onUpdate(memo.id, memo.title, memo.content);
    // }
    console.log({memo});
    return (
        <Card bg = {memo.color} style={{ width: '18rem'}}>
        <Card.Body>
          <Card.Title>{memo.title}</Card.Title>
          <Card.Text>
          {memo.content}
          </Card.Text>
        </Card.Body>
      </Card>
    )

}

// Memo.propTypes = {
//     todo: PropTypes.shape({
//       id: PropTypes.string,
//       title: PropTypes.string,
//       content: PropTypes.string,
//       date: PropTypes.instanceOf(Date),
//     }).isRequired,
//     onUpdate: PropTypes.func.isRequired,
//     onDelete: PropTypes.func.isRequired,
//   }
  
  export default Memo
  