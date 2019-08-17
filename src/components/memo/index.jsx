import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import { Button, ButtonGroup } from '@blueprintjs/core'

const Memo = ({ memo, onUpdate, onDelete }) => {
    const handleDelete = () => {
        onDelete(memo.id);
    }

    const handleUpdate = () => {
        onUpdate(memo.id, memo.title, memo.content);
    }

    return (
        <div>
            <span>memo.date</span>
            <h3>memo.title</h3>
            <h3>memo.content</h3>
        </div>
    )

}

Memo.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      date: PropTypes.instanceOf(Date),
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  }
  
  export default Memo
  