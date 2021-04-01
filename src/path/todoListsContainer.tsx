import React from 'react';
import {StateType} from "../redux/store";
import {connect} from "react-redux";
import {TodoListType} from "../types/todoListType";
import TodoLists from "../components/todoLists/todoLists";
import {addNewTask} from "../redux/taskReducer";

type MSTP = {
    todoLists: TodoListType[]
}

type MDTP = {
    addNewTask: (id: string, title: string) => void
}

type TodoListsContainerPropsType = MSTP & MDTP

class TodoListsContainer extends React.Component<TodoListsContainerPropsType> {
    render() {
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
export default connect(mapStateToProps, {
    addNewTask
})(TodoListsContainer);