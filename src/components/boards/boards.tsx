import React from 'react';
import {Button, Container, Grid} from "@material-ui/core";
import Board from "./board/board";
import {BoardType} from "../../types/boardType";

type MSTP = {
    boards: BoardType[]
}

type MDTP = {
    addNewBoardTC: (title: string) => void
    deleteBoardTC: (boardId: string) => void
    renameBoardTC: (boardId: string, newTitle: string) => void
}

type BoardsPropsType = MSTP & MDTP

function Boards(props: BoardsPropsType) {

    const addNewBoardHandler = () => {
        props.addNewBoardTC("Board one")
    }
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    props.boards.map(board =>
                        <Grid key={board._id} item>
                            <Board
                                title={board.title}
                                boardId={board._id}
                                deleteBoardTC={props.deleteBoardTC}
                                renameBoardTC={props.renameBoardTC}
                            />
                        </Grid>
                    )
                }
                <Grid item>
                    <Button onClick={addNewBoardHandler}>Add new Board</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Boards;