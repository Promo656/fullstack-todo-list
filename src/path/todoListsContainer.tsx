import React from 'react';
import {StateType} from "../redux/store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom"
import {compose} from "redux"
import {TodoListType} from "../types/todoListType";
import TodoLists from "../components/todoLists/todoLists";
import {addNewTask} from "../redux/taskReducer";
import {TaskType} from "../types/taskType";
import {addNewTodoList, changeTodoListTitle} from "../redux/todoListReducer";

type MSTP = {
    [key: string]: TodoListType[]
}

type MDTP = {
    addNewTask: (task: TaskType) => void
    addNewTodoList: (todoList: TodoListType) => void
    changeTodoListTitle: (boardId: string, todoListId: string, newTodoListTitle: string) => void
}

type RouteComponentPropsType = {
    boardId: string
}

type PathParamsType = RouteComponentProps<RouteComponentPropsType>

type TodoListsContainerPropsType = MSTP & MDTP & PathParamsType

class TodoListsContainer extends React.Component<TodoListsContainerPropsType> {
    render() {
        return (
            <TodoLists
                todoLists={this.props.todoLists[this.props.match.params.boardId]}
                addNewTask={this.props.addNewTask}
                addNewTodoList={this.props.addNewTodoList}
                boardId={this.props.match.params.boardId}
                changeTodoListTitle={this.props.changeTodoListTitle}
            />
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    todoLists: state.todoLists
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addNewTask,
        addNewTodoList,
        changeTodoListTitle
    }),
    withRouter
)(TodoListsContainer)

