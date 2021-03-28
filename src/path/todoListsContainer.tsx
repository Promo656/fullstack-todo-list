import React from 'react';
import {StateType} from "../redux/store";
import {connect} from "react-redux";
import {TodoListType} from "../types/todoListType";
import TodoLists from "../components/todoLists/todoLists";

type MSTP = {
    todoLists: TodoListType[]
}

type TodoListsContainerPropsType = MSTP

class TodoListsContainer extends React.Component<TodoListsContainerPropsType> {
    render() {
        return (
            <TodoLists
                todoLists={this.props.todoLists}
            />
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    todoLists: state.todoLists
})
export default connect(mapStateToProps, null)(TodoListsContainer);