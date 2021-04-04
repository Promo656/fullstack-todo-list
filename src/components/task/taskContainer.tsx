import React from 'react';
import Task from "./task";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {TaskType} from "../../types/taskType";

type MSTP = {
    [key: string]: TaskType[]

}
type PropsType = {
    todoListId: string
}

type TaskContainerPropsType = MSTP

class TaskContainer extends React.Component<any> {
    render() {
        return (

            /* Object.entries(this.props.tasks).map(([key, value]) =>
                 <Task key={key} task={value.text}/>
             )*/
            <Task tasks={this.props.tasks[this.props.todoListId]}/>
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    tasks: state.tasks
})
export default connect(mapStateToProps, {})(TaskContainer);