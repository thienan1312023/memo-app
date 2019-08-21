import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import styled from 'styled-components';
import MemoList from '../memo-list'
import { MemoDetail } from '../memo-detail'
import { API_BASE_MEMO } from '../../constants/api.constants';
import { memoActions } from '../../actions/memo.actions';

const overflowMemo = {
  backgroundColor: 'white'
}

const titleListMemo = {
  height: '44px',
  textTransform: 'uppercase',
  paddingLeft: '20px',
  paddingTop: '10px',
  fontFamily: 'cursive',
  color: 'brown'
}
class MainBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isReLoadData) {
      this.fetchMemos();
      this.props.fetchMemos(false);
    }
  }
  i

  fetchMemos = () => {
    const url = API_BASE_MEMO;
    axios({
      url: url,
      method: 'GET'
    })
      .then(
        res => {
          if (res.status === 200) {
            this.setState({
              data: res.data,
              isLoading: false
            })
          }
        }
      )
      .catch(function (err) {
        console.log(err);
      });
  }
  componentDidMount() {
    this.fetchMemos();
  }

  render() {
    const { data } = this.state;
    return data && (
      <div className="d-flex row" style={overflowMemo}>
        <div className="col-md-8 col-xs-12 pr-0"><MemoDetail></MemoDetail> </div>
        <div className="col-md-4 col-xs-12 p-0">
             <div style={titleListMemo}>All memos ({data.length})</div>
             <MemoList memos={data} />
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const isReLoadData = state.memo.isReLoadData;
  return { isReLoadData };
}

const actionCreators = {
  fetchMemos: memoActions.fetchMemos
}

const connectedMainBody = connect(mapState, actionCreators)(MainBody);
export { connectedMainBody as MainBody };