import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import MemoList from '../memo-list'
import { Toolbar } from '../toolbar'

const MainBody = () => {
  let memos = [
    {
      key: '1',
      title: 'Nhat ki',
      content: 'ngay hom nay toi an gi',
      color: 'primary'
    },
    {
      key: '2',
      title: 'Nhat ki 2',
      content: 'ngay hom nay toi an gi',
      color: 'success'
    },
    {
      key: '3',
      title: 'Nhat ki 3',
      content: 'ngay hom nay toi an gi',
      color: 'warning'
    }
  ]
  return (
    <React.Fragment>
      {/* <CSSTransition
        classNames="item"
        timeout={300}
        in={!listProps.memos.length}
        exit={false}
        unmountOnExit
      >
      </CSSTransition> */}
      {/* <Filter {...toolbarProps} /> */}
      <MemoList memos={memos} />
    </React.Fragment>
  )
}

// MainBody.propTypes = {
//   listProps: PropTypes.shape({
//     //onScroll: PropTypes.func,
//     todos: PropTypes.arrayOf(PropTypes.object),
//     updateTodo: PropTypes.func,
//     deleteTodo: PropTypes.func,
//   }).isRequired,
//   filterProps: PropTypes.shape({
//     todos: PropTypes.arrayOf(PropTypes.object),
//     //scrolled: PropTypes.bool,
//     onFilter: PropTypes.func,
//     onDeleteAll: PropTypes.func,
//   }).isRequired,
// }

export default MainBody
