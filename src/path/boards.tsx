import React from 'react';
import {Container, Grid} from "@material-ui/core";
import Board from "./board";

function Boards(props: any) {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item>
                    <Board/>
                </Grid>
                <Grid item>
                    <Board/>
                </Grid>
                <Grid item>
                    <Board/>
                </Grid>
                <Grid item>
                    <Board/>
                </Grid>
                <Grid item>
                    <Board/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Boards;