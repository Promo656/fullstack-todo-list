import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button, IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import TaskContainer from "../../task/taskContainer";

type TodoListPropsType = {
    title: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        todoList: {
            width: 272,
            minHeight: 78,
            backgroundColor: "#ebecf0",
            borderRadius: 3,
            padding: theme.spacing(1),
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        },
        header: {
            display: "flex",
            justifyContent: "space-between"
        },
        reIconButtonRoot: {
            padding: 0
        },
        addButton: {
            width: "100%"
        },
        reButtonLabel: {
            justifyContent: "flex-start"
        },
        reButtonText: {
            padding: 0
        }
    }),
);

export default function TodoList(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.todoList}>
            <div className={classes.header}>
                <span>{props.title}</span>
                <IconButton classes={{root: classes.reIconButtonRoot}}>
                    <MoreHorizIcon/>
                </IconButton>
            </div>
            <TaskContainer/>
            <div>
                <Button classes={{
                    label: classes.reButtonLabel,
                    text: classes.reButtonText
                }} className={classes.addButton}>
                    <AddIcon/>
                    Add a card
                </Button>
            </div>
        </div>
    );
}
