import React from 'react';
import {TodoListType} from "../../types/todoListType";
import {Container, Grid} from "@material-ui/core";
import TodoList from "./todoList/todoList";
import {TaskType} from "../../types/taskType";

type MSTP = {
    [key: string]: TodoListType[]
}

type MDTP = {
    addNewTask: (task:TaskType) => void
}

type TodoListsPropsType = MSTP & MDTP

function TodoLists(props: TodoListsPropsType) {

    return (
        <Container>
            <Grid container spacing={5}>
                {


                    /*props.todoLists.map(todoList =>
                        <Grid key={todoList.id} item>
                            <TodoList
                                todoListId={todoList.id}
                                title={todoList.title}
                                boardId={todoList.boardId}
                                addNewTask={props.addNewTask}
                            />
                        </Grid>
                    )*/
                }
            </Grid>
        </Container>
    );
}

export default TodoLists;