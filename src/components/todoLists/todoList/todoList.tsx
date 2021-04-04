import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button, IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import TaskContainer from "../../task/taskContainer";
import {v1} from "uuid";
import {TaskType} from "../../../types/taskType";
import EditableText from "../../editableText/editableText";

type MDTP = {
    addNewTask: (task: TaskType) => void
    changeTodoListTitle: (boardId: string, todoListId: string, newTodoListTitle: string) => void
}
type MSTP = {
    title: string
    todoListId: string
    boardId: string
}
type TodoListPropsType = MSTP & MDTP


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
        },
        title: {
            cursor: "pointer"
        }
    }),
);

export default function TodoList(props: TodoListPropsType) {
    const classes = useStyles();

    const addNewTaskHandler = () => {
        props.addNewTask({id: v1(), text: "", todoListId: props.todoListId})
    }

    return (
        <div className={classes.todoList}>
            <div className={classes.header}>
                <EditableText
                    name="TodoList"
                    title={props.title}
                    changeTitle={props.changeTodoListTitle}
                    boardId={props.boardId}
                    todoListId={props.todoListId}
                    className={classes.title}
                />
                <IconButton classes={{root: classes.reIconButtonRoot}}>
                    <MoreHorizIcon/>
                </IconButton>
            </div>
            <TaskContainer todoListId={props.todoListId}/>
            <div>
                <Button onClick={addNewTaskHandler} classes={{
                    label: classes.reButtonLabel,
                    text: classes.reButtonText
                }} className={classes.addButton}>
                    <AddIcon/>
                    Add a task
                </Button>
            </div>
        </div>
    );
}
