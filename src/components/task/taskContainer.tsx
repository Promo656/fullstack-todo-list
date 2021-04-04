import React from 'react';
import Task from "./task";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {TaskType} from "../../types/taskType";
import {changeTaskTitle} from "../../redux/taskReducer";

type MSTP = {
    [key: string]: TaskType[]
    //todoListId: string
}
type MDTP = {
    changeTaskTitle: (todoListId: string, taskId: string, newTaskTitle: string) => void
}

type TaskContainerPropsType = MSTP & MDTP

class TaskContainer extends React.Component<any> {
    render() {
        return (
            <Task
                tasks={this.props.tasks[this.props.todoListId]}
                changeTaskTitle={this.props.changeTaskTitle}
                todoListId={this.props.todoListId}
            />
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    tasks: state.tasks
})
export default connect(mapStateToProps, {
    changeTaskTitle
})(TaskContainer);