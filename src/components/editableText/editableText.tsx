import React, {ChangeEvent, useState} from 'react';
import {TextField, Typography} from "@material-ui/core";

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
                    : <Typography variant="inherit"
                                  className={props.className}
                                  onClick={onChangeMod}
                    >{title}
                    </Typography>
            }
        </>
    );
}

export default EditableText;