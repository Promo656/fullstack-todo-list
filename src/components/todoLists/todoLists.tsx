import React from 'react';
import {TodoListType} from "../../types/todoListType";
import {Button, Container, Grid} from "@material-ui/core";
import TodoList from "./todoList/todoList";

type MSTP = {
    todoLists: TodoListType[]
    boardId: string
}

type MDTP = {
    addNewTaskTC: (boardId:string,todoListId: string, title: string) => void
    addNewTodoListTC: (boardId: string, title: string) => void
    renameTodoListTC: (boardId: string, todoListId: string, newTodoListTitle: string) => void
    deleteTodoListTC: (boardId: string, todoListId: string) => void
}

type TodoListsPropsType = MSTP & MDTP

function TodoLists(props: TodoListsPropsType) {
    const addNewTodoListHandler = () => {
        props.addNewTodoListTC(props.boardId, "New Todo")
    }

    return (
        <Container>
            <Grid container spacing={5}>
                {
                    props.todoLists
                    && !!props.todoLists.length
                    && props.todoLists.map(todoList =>
                        <Grid key={todoList._id} item>
                            <TodoList
                                key={todoList._id}
                                todoListId={todoList._id}
                                title={todoList.title}
                                boardId={todoList.boardId}
                                addNewTaskTC={props.addNewTaskTC}
                                renameTodoListTC={props.renameTodoListTC}
                                deleteTodoListTC={props.deleteTodoListTC}
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