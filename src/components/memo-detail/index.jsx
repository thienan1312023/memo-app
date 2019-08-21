import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import axios from 'axios'
import styled from 'styled-components';
import { memoActions } from '../../actions/memo.actions';
import { API_BASE } from '../../constants/api.constants';

const MemoStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 99%;
    .memo__title{
        line-height: 130%;
        padding: 10px;
    }
    .memo__content{
        height: 71vh;
    }
`;
class MemoDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memo: {
                id:'',
                title: '',
                content: '',
                color: ''
            }
        }
    }
    handleSubmit = () => {
        event.preventDefault();
        const { memo } = this.state;
        const url = API_BASE;
        axios.put(`${url}${memo.id}/update`, { ...memo })
            .then(res => {
                console.log(res);
                this.props.fetchMemos(true);
        }).catch((error) => {
            console.log(error);
        });
        
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
        const { memoSelected } = nextProps;
        if (nextProps !== this.props) {
            this.setState({
                memo: {
                    id : memoSelected.id,
                    title: memoSelected.title,
                    content: memoSelected.content,
                    color: memoSelected.color
                }

            });
            return true;
        }
        return true;

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <MemoStyle>
                <input  className="memo__title"
                        type="text" 
                        name="title" 
                        placeholder="Title"
                        value={this.state.memo.title || ''} 
                        onChange={this.handleChange} />
                <textarea className ="memo__content"
                        type="text" 
                        name="content" 
                        value={this.state.memo.content || ''} 
                        placeholder="Write your memo ... "
                        onChange={this.handleChange} />
                </MemoStyle>
                <input type="submit" value="Submit" />
            </form>
        )
    }

}


function mapState(state) {
    const memoSelected = state.memo.memoSelected;
    return { memoSelected };
}

const actionCreators = {
    fetchMemos: memoActions.fetchMemos
}

const connectedMemoDetail = connect(mapState, actionCreators)(MemoDetail);
export { connectedMemoDetail as MemoDetail };
