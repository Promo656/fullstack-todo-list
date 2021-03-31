import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useHistory} from "react-router-dom";

type BoardPropsType = {
    title: string
}

const image = 'https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/07/big-sur-recreation2.jpg'
const useStyles = makeStyles({
    root: {
        width: 250,
    },
    media: {
        height: 140,
    },
});

export default function Board(props: BoardPropsType) {
    const classes = useStyles();
    const history = useHistory()
    const gotoTodoLists = () => {
        history.push('/111')
    }
    return (
        <Card className={classes.root} onClick={gotoTodoLists}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
