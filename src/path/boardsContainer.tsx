import React from 'react';
import Boards, {BoardNew} from "../components/boards/boards";
import {StateType} from "../redux/store";
import {connect} from "react-redux";
import {BoardType} from "../types/boardType";
import {addNewBoard} from "../redux/boardReducer";
import axios from "axios";

type MSTP = {
    boards: BoardNew[]
}
type MDTP = {
    addNewBoard: (board: BoardType) => void
}

type BoardsContainerPropsType = MSTP & MDTP

class BoardsContainer extends React.Component<BoardsContainerPropsType> {

    state = {
        boards: []
    }


    async componentDidMount() {
        const response = await axios.get('http://localhost:5001/board')
        this.setState({
            boards: response.data
        })
    }

    render() {
        return (
            <Boards
                boards={this.state.boards}
                addNewBoard={this.props.addNewBoard}
            />
        );
    }
}

/*const mapStateToProps = (state: StateType) => ({
    boards: state.boards
})*/
export default connect(null, {
    addNewBoard
})(BoardsContainer);