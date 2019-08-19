import React from 'react';
import axios from 'axios';
import MemoList from '../memo-list'
import {MemoDetail} from '../memo-detail'
import { API_BASE } from '../../constants/api.constants';
export default class MainBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    const url = API_BASE;
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

  render() {
    const { data } = this.state;
    return data && (
      <div className="d-flex">
        <MemoList memos={data} />
        <MemoDetail></MemoDetail>
      </div>
    );
  }
}
