import React from 'react';
import Task from "./task";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {TaskType} from "../../types/taskType";

type MSTP = {
    tasks: TaskType[]
}

type TaskContainerPropsType = MSTP

class TaskContainer extends React.Component<TaskContainerPropsType> {
    render() {

        return (
            this.props.tasks.map(task => <Task key={task.id} task={task}/>)
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    tasks: state.tasks
})
export default connect(mapStateToProps, {})(TaskContainer);