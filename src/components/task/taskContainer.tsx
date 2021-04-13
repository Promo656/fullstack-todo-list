import React from 'react';
import Task from "./task";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {TaskType} from "../../types/taskType";
import {renameTaskTC} from "../../redux/taskReducer";

type MSTP = {
    [key: string]: TaskType[]
    //todoListId: string
}
type MDTP = {
    renameTaskTC: (todoListId: string, taskId: string, newTaskTitle: string) => void
}

type TaskContainerPropsType = MSTP & MDTP

class TaskContainer extends React.Component<any> {
    render() {
        return (
            <Task
                tasks={this.props.tasks[this.props.todoListId]}
                renameTaskTC={this.props.renameTaskTC}
                todoListId={this.props.todoListId}
            />
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    tasks: state.tasks
})
export default connect(mapStateToProps, {
    renameTaskTC
})(TaskContainer);