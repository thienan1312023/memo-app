import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { memoActions } from '../../actions/memo.actions';
const MemoDetail = props => {
    debugger;
    const { memo, fetchMemos } = props;
    return (
        <div>
            <h2>memo.title</h2>
            <div>memo.content</div>
        </div>
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
    fetchMemos: memoActions.fetchMemos
}

const connectedMemoDetail = connect(mapState, actionCreators)(MemoDetail);
export { connectedMemoDetail as MemoDetail };
