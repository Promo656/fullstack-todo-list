import React from 'react';
import Task from "./task";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {TaskType} from "../../types/taskType";

type MSTP = {
    tasks: TaskType[]
}

type TaskContainerPropsType = MSTP

class TaskContainer extends React.Component<any> {
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