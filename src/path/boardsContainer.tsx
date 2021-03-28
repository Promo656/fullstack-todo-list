import React from 'react';
import Boards from "../components/boards/boards";
import {StateType} from "../redux/store";
import {connect} from "react-redux";
import {BoardType} from "../types/boardType";

type MapStateToProps = {
    boards: BoardType[]
}

type BoardsContainerPropsType = MapStateToProps

class BoardsContainer extends React.Component<BoardsContainerPropsType> {
    render() {
        return (
            <Boards
                boards={this.props.boards}
            />
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    boards: state.boards
})
export default connect(mapStateToProps, null)(BoardsContainer);