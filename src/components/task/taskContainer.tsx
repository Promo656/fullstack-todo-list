import React from 'react';
import Task from "./task";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {Taskype} from "../../types/taskType";

type MSTP = {
    tasks: Taskype[]
}

type TaskContainerPropsType = MSTP

class TaskContainer extends React.Component<TaskContainerPropsType> {
    render() {
        return (
            <Task tasks={this.props.tasks}/>
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    tasks: state.tasks
})
export default connect(mapStateToProps, null)(TaskContainer);