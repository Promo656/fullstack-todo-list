import React, {ChangeEvent, useState} from 'react';
import {Button, IconButton, TextField, Typography} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

type MSTP = {
    name: string
    title: string
    boardId?: string
    todoListId?: string
    taskId?: string
    className?: any
}

type MDTP = {
    changeTitle: (boardId: string, todoListId: string, newTodoListTitle: string) => void
}
type EditableTextPropsType = MSTP & MDTP

function EditableText(props: EditableTextPropsType) {
    const [mod, setMod] = useState(false)
    const [title, setTitle] = useState(props.title)
    const [isShowDelete, setIsShowDelete] = useState(false)

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const onChangeMod = () => {
        setMod(true)
        setTitle(props.title)
    }

    const onBlur = () => {
        setMod(false)
        if (props.name === "Task") {
            props.changeTitle(props.todoListId as string, props.taskId as string, title)
        } else if (props.name === "TodoList") {
            props.changeTitle(props.boardId as string, props.todoListId as string, title)
        }
    }

    const onMouseOverHandler = () => {
        setIsShowDelete(true)
    }

    const onMouseOutHandler = () => {
        setIsShowDelete(false)
    }

    return (
        <>
            {
                mod
                    ? <TextField
                        value={title}
                        onChange={onChangeTitleHandler}
                        onBlur={onBlur}
                        variant="outlined"
                        autoFocus
                        size="small"
                    />
                    : <div
                        className={props.className}
                        onClick={onChangeMod}
                        onMouseOver={onMouseOverHandler}
                        onMouseOut={onMouseOutHandler}
                    >
                        <Typography variant="inherit">{title}</Typography>
                        {
                            props.name === "Task"
                            && isShowDelete
                            && <Button size={"small"}>
                                <DeleteIcon/>
                            </Button>
                        }

                    </div>
            }
        </>
    );
}

export default EditableText;