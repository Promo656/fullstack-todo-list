import React from 'react';
import {TodoListType} from "../../types/todoListType";
import {Container, Grid} from "@material-ui/core";
import TodoList from "./todoList/todoList";

type TodoListsPropsType = {
    todoLists: TodoListType[]
}

function TodoLists(props: TodoListsPropsType) {
    return (
        <Container>
            <Grid container spacing={5}>
                {
                    props.todoLists.map(todoList =>
                        <Grid key={todoList.id} item>
                            <TodoList
                                title={todoList.title}
                            />
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    );
}

export default TodoLists;