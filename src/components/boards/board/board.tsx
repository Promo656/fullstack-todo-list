import React, {ChangeEvent, MouseEvent, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useHistory} from "react-router-dom";
import {Button, CardActions, TextField} from "@material-ui/core";
import EditableText from "../../editableText/editableText";


type MSTP = {
    title: string
    boardId: string
}

type MDTP = {
    deleteBoardTC: (boardId: string) => void
    renameBoardTC: (boardId: string, newTitle: string) => void
}
type BoardPropsType = MSTP & MDTP

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

    const [title, setTitle] = useState(props.title)
    const [editMod, setEditMod] = useState(false)

    const history = useHistory()

    const gotoTodoLists = () => {
        history.push(`/${props.boardId}`)
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onChangeModeTrue = () => {
        setEditMod(true)
    }
    const onChangeModeFalse = () => {
        setEditMod(false)
        props.renameBoardTC(props.boardId, title)
    }

    const deleteBoardHandler = () => {
        props.deleteBoardTC(props.boardId)
    }


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    onClick={gotoTodoLists}
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
            </CardActionArea>
            <CardContent>
                {
                    editMod
                        ? <TextField
                            value={title}
                            onChange={onChangeTitleHandler}
                            variant="outlined"
                            autoFocus
                            size="small"
                        />
                        : <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                        >
                            {title}
                        </Typography>
                }

            </CardContent>
            <CardActions>
                {
                    editMod
                        ? <Button size="small" color="primary" onClick={onChangeModeFalse}>
                            Сохранить
                        </Button>
                        : <Button size="small" color="primary" onClick={onChangeModeTrue}>
                            Редактировать
                        </Button>
                }
                <Button size="small" color="primary" onClick={deleteBoardHandler}>
                    Удалить
                </Button>
            </CardActions>
        </Card>
        /*    <Card className={classes.root} onClick={gotoTodoLists}>
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
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>*/
    );
}
