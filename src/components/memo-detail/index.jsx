import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import axios from 'axios'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { memoActions } from '../../actions/memo.actions';
import { API_BASE_MEMO } from '../../constants/api.constants';

const MemoStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    .memo__title{
        line-height: 130%;
        padding: 10px;
    }
    .memo__content{
        height: calc(100% - 126px);;
        resize: none;
        padding: 10px;
    }
    .memo__container-submit{
        .memo__submit{
            width: 15%;
        }
        display: flex;
        justify-content: flex-end;
        padding-right: 25px;
        padding-top: 10px;
    }
    
`;
class MemoDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memo: {
                id: '',
                title: '',
                content: '',
                color: ''
            },
            isCreateMemo: true
        }
    }
    handleSubmit = () => {
        event.preventDefault();
        const { memo } = this.state;
        if (memo.id && memo.id !== "") {
            axios.put(`${API_BASE_MEMO}${memo.id}/update`, { ...memo })
                .then(res => {
                    console.log(res);
                    this.props.fetchMemos(true);
                }).catch((error) => {
                    console.log(error);
                });
        } else {
            let user = JSON.parse(localStorage.getItem('user'));
            memo.userName = user.userName;
            memo.color = 'yellow';
            axios.post(`${API_BASE_MEMO}create`, { ...memo })
                .then(res => {
                    this.props.fetchMemos(true);
                }).catch((error) => {
                    console.log(error);
                });
        }

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const { memo } = this.state;
        this.setState({
            memo: {
                ...memo,
                [name]: value
            }
        });
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        const { memoSelected, isCreateMemo } = nextProps;
        if (nextProps !== this.props) {
            if (isCreateMemo) {
                this.setState({
                    memo: {
                        id: '',
                        title: '',
                        content: '',
                        color: ''
                    },
                    isCreateMemo: isCreateMemo
                });
            } else {
                this.setState({
                    memo: {
                        id: memoSelected.id,
                        title: memoSelected.title,
                        content: memoSelected.content,
                        color: memoSelected.color
                    },
                    isCreateMemo: isCreateMemo

                });
            }
            return true;
        }
        return true;

    }
    render() {
        const { isCreateMemo } = this.state;
        return (
            <form className="h-100" onSubmit={this.handleSubmit}>
                <MemoStyle>
                    <input className="memo__title"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={this.state.memo.title || ''}
                        onChange={this.handleChange} />
                    <textarea className="memo__content"
                        type="text"
                        name="content"
                        value={this.state.memo.content || ''}
                        placeholder="Write your new memo ... "
                        onChange={this.handleChange} />
                    <div className="memo__container-submit">
                        <Button variant="contained"
                            color="primary"
                            className="memo__submit"
                            onClick={this.handleSubmit}>{isCreateMemo ? 'Add New' : 'Update'}</Button>
                    </div>
                </MemoStyle>

            </form>
        )
    }

}


function mapState(state) {
    const memoSelected = state.memo.memoSelected;
    const isCreateMemo = state.memo.isCreateMemo;
    return { memoSelected, isCreateMemo };
}

const actionCreators = {
    fetchMemos: memoActions.fetchMemos,
    createMemo: memoActions.createMemo
}

const connectedMemoDetail = connect(mapState, actionCreators)(MemoDetail);
export { connectedMemoDetail as MemoDetail };
