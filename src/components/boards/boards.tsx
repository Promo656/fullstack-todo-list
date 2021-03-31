import React from 'react';
import {Container, Grid} from "@material-ui/core";
import Board from "./board/board";
import {BoardType} from "../../types/boardType";

type BoardsPropsType = {
    boards: BoardType[]
}

function Boards(props: BoardsPropsType) {
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    props.boards.map(board =>
                        <Grid key={board.id} item>
                            <Board
                                title={board.title}
                            />
                        </Grid>)
                }
            </Grid>
        </Container>
    );
}

export default Boards;