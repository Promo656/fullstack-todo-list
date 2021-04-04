import React from 'react';
import Boards from "../components/boards/boards";
import {StateType} from "../redux/store";
import {connect} from "react-redux";
import {BoardType} from "../types/boardType";
import {addNewBoard} from "../redux/boardReducer";

type MSTP = {
    boards: BoardType[]
}
type MDTP = {
    addNewBoard: (board: BoardType) => void
}

type BoardsContainerPropsType = MSTP & MDTP

class BoardsContainer extends React.Component<BoardsContainerPropsType> {
    render() {
        return (
            <Boards
                boards={this.props.boards}
                addNewBoard={this.props.addNewBoard}
            />
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    boards: state.boards
})
export default connect(mapStateToProps, {
    addNewBoard
})(BoardsContainer);