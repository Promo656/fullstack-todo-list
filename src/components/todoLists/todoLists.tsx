import React from 'react';
import {TodoListType} from "../../types/todoListType";
import {Button, Container, Grid} from "@material-ui/core";
import {TaskType} from "../../types/taskType";
import TodoList from "./todoList/todoList";
import {v1} from "uuid";

type MSTP = {
    todoLists: TodoListType[]
    boardId: string
}

type MDTP = {
    addNewTask: (task: TaskType) => void
    addNewTodoList: (todoList: TodoListType) => void
}

type TodoListsPropsType = MSTP & MDTP

function TodoLists(props: TodoListsPropsType) {
    const addNewTodoListHandler = () => {
        props.addNewTodoList({id: v1(), title: "New TODO", boardId: props.boardId})
    }

    return (
        <Container>
            <Grid container spacing={5}>
                {
                    props.todoLists
                    && !!props.todoLists.length
                    && props.todoLists.map(todoList =>
                        <Grid key={todoList.id} item>
                            <TodoList
                                todoListId={todoList.id}
                                title={todoList.title}
                                boardId={todoList.boardId}
                                addNewTask={props.addNewTask}
                            />
                        </Grid>
                    )
                }
                <Grid item>
                    <Button onClick={addNewTodoListHandler}>Add new TodoList</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default TodoLists;