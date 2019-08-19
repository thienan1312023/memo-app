import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { memoActions } from '../../actions/memo.actions';
import { API_BASE } from '../../constants/api.constants';
import axios from 'axios'
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
                <label>
                    Name:
                    <input type="text" name="title" value={this.state.memo.title || ''} onChange={this.handleChange} />
                    <input type="text" name="content" value={this.state.memo.content || ''} onChange={this.handleChange} />
                </label>
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
