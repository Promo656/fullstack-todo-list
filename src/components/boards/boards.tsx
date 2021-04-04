import React from 'react';
import {Button, Container, Grid} from "@material-ui/core";
import Board from "./board/board";
import {BoardType} from "../../types/boardType";
import {v1} from "uuid";

type MSTP = {
    boards: BoardType[]
}

type MDTP = {
    addNewBoard: (board: BoardType) => void
}

type BoardsPropsType = MSTP & MDTP

function Boards(props: BoardsPropsType) {

    const addNewBoardHandler = () => {
        props.addNewBoard({id: v1(), title: "New Board"})
    }
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    props.boards.map(board =>
                        <Grid key={board.id} item>
                            <Board
                                title={board.title}
                                boardId={board.id}
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