import React from 'react';
import {StateType} from "../redux/store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom"
import {compose} from "redux"
import {TodoListType} from "../types/todoListType";
import TodoLists from "../components/todoLists/todoLists";
import {addNewTask} from "../redux/taskReducer";
import {TaskType} from "../types/taskType";

type MSTP = {
    [key: string]: TodoListType[]
}

type MDTP = {
    addNewTask: (task:TaskType) => void
}

type RouteComponentPropsType = {
    boardId: string
}

type PathParamsType = RouteComponentProps<RouteComponentPropsType>

type TodoListsContainerPropsType = MSTP & MDTP & PathParamsType

class TodoListsContainer extends React.Component<TodoListsContainerPropsType> {
    render() {
        debugger
        return (
            <TodoLists
                todoLists={this.props.todoLists}
                addNewTask={this.props.addNewTask}
            />
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    todoLists: state.todoLists
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addNewTask}),
    withRouter
)(TodoListsContainer)

