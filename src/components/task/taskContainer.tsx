import React from 'react';
import Task from "./task";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {TaskType} from "../../types/taskType";

type MSTP = {
    [key: string]: TaskType[]
}

type TaskContainerPropsType = MSTP

class TaskContainer extends React.Component<TaskContainerPropsType> {
    render() {
        return (
            Object.entries(this.props.tasks).map(([key, value]) =>
                <Task key={key} task={value.text}/>
            )
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    tasks: state.tasks
})
export default connect(mapStateToProps, {})(TaskContainer);