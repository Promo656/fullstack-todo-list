import React from 'react';
import Boards from "../components/boards/boards";
import {StateType} from "../redux/store";
import {connect} from "react-redux";
import {BoardType} from "../types/boardType";
import {addNewBoard, addNewBoardTC, deleteBoardTC, fetchBoardsTC, renameBoardTC} from "../redux/boardReducer";

type MSTP = {
    boards: BoardType[]
}
type MDTP = {
    addNewBoardTC: (title: string) => void
    fetchBoardsTC: () => void
    deleteBoardTC: (boardId: string) => void
    renameBoardTC: (boardId: string, newTitle: string) => void
}

type BoardsContainerPropsType = MSTP & MDTP

class BoardsContainer extends React.Component<BoardsContainerPropsType> {

    async componentDidMount() {
        this.props.fetchBoardsTC()
    }


    render() {
        return (
            <Boards
                boards={this.props.boards}
                addNewBoardTC={this.props.addNewBoardTC}
                deleteBoardTC={this.props.deleteBoardTC}
                renameBoardTC={this.props.renameBoardTC}
            />
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    boards: state.boards
})
export default connect(mapStateToProps, {
    addNewBoardTC,
    fetchBoardsTC,
    deleteBoardTC,
    renameBoardTC
})(BoardsContainer);