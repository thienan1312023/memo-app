import React, { Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
import MemoList from '../memo-list'
import { MemoDetail } from '../memo-detail'
import { API_BASE_MEMO } from '../../constants/api.constants';
import { memoActions } from '../../actions/memo.actions';

const MainBodyStyle = styled.div`
  .main-body__title-list-item{
    height: 44px
    textTransform: uppercase
    padding-left: 20px
    align-items: center
    font-family: cursive
    display: flex;
    padding-right: 40px;
    justify-content: space-between
      .title{
        font-size: 21px
        color: brown
      }
      .fa-plus-square{
        color: #3b78e6;
        font-size: 35px;
        :hover{
          color: #114ebd;
        }
      }
  }
`;

const overflowMemo = {
  backgroundColor: 'white'
}
const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    background-color: white;
`;
class MainBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loading: true
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
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('tokenMemo') || ''
      }
    })
      .then(
        res => {
          if (res.status === 200) {
            this.setState({
              data: res.data,
              loading: false
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

  handleCreateMemo = () => {
    this.props.createMemo(true);
  }
  render() {
    const { data } = this.state;
    return (
      <Fragment>
        {
          data && 
          <MainBodyStyle className="row h-100" style={overflowMemo}>
            <div className="col-lg-8 col-12 pr-0"><MemoDetail></MemoDetail> </div>
            <div className="col-lg-4 col-12 p-0">
              <div className="main-body__title-list-item">
                <span className="title"> All memos ({data.length}) </span>
                <i className="fa fa-plus-square" onClick={this.handleCreateMemo} aria-hidden="true"></i>
              </div>
              <MemoList memos={data} />
            </div>
          </MainBodyStyle>
        }

          <div className='sweet-loading'>
            <ClipLoader
              css={override}
              sizeUnit={"px"}
              size={150}
              color={'#123abc'}
              loading={this.state.loading}
            />
          </div>  
  
    </Fragment>
    );
}
}

MainBody.propTypes = {
  isReLoadData: PropTypes.bool
};

function mapState(state) {
  const isReLoadData = state.memo.isReLoadData;
  return { isReLoadData };
}

const actionCreators = {
  fetchMemos: memoActions.fetchMemos,
  createMemo: memoActions.createMemo
}

const connectedMainBody = connect(mapState, actionCreators)(MainBody);
export { connectedMainBody as MainBody };