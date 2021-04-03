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
                    Object.entries(props.boards).map(([key, value]) =>
                        <Grid key={key} item>
                            <Board
                                title={value.title}
                            />
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    );
}

export default Boards;