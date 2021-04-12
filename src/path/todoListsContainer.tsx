import React from 'react';
import {StateType} from "../redux/store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom"
import {compose} from "redux"
import {TodoListType} from "../types/todoListType";
import TodoLists from "../components/todoLists/todoLists";
import {addNewTaskTC, fetchTaskTC} from "../redux/taskReducer";
import {addNewTodoListTC, deleteTodoListTC, fetchTodoListsTC, renameTodoListTC} from "../redux/todoListReducer";

type MSTP = {
    [key: string]: TodoListType[]
}

type MDTP = {
    addNewTaskTC: (boardId: string, todoListId: string, title: string) => void
    addNewTodoListTC: (boardId: string, title: string) => void
    renameTodoListTC: (boardId: string, todoListId: string, newTodoListTitle: string) => void
    deleteTodoListTC: (boardId: string, todoListId: string) => void
    fetchTodoListsTC: () => void
    fetchTaskTC: () => void
}

type RouteComponentPropsType = {
    boardId: string
}

type PathParamsType = RouteComponentProps<RouteComponentPropsType>

type TodoListsContainerPropsType = MSTP & MDTP & PathParamsType

class TodoListsContainer extends React.Component<TodoListsContainerPropsType> {
    async componentDidMount() {
        //TODO:setBoardsTC ???
        await this.props.fetchTodoListsTC()
        await this.props.fetchTaskTC()
    }

    render() {
        return (
            <TodoLists
                todoLists={this.props.todoLists[this.props.match.params.boardId]}
                addNewTaskTC={this.props.addNewTaskTC}
                addNewTodoListTC={this.props.addNewTodoListTC}
                boardId={this.props.match.params.boardId}
                renameTodoListTC={this.props.renameTodoListTC}
                deleteTodoListTC={this.props.deleteTodoListTC}
            />
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    todoLists: state.todoLists
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        fetchTodoListsTC,
        fetchTaskTC,
        addNewTaskTC,
        addNewTodoListTC,
        renameTodoListTC,
        deleteTodoListTC
    }),
    withRouter
)(TodoListsContainer)

