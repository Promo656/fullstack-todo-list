import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Taskype} from "../../types/taskType";

type TaskPropsType = {
    tasks: Taskype[]
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        task: {
            display: "flex",
            alignItems: "center",
            minHeight: 32,
            borderRadius: 4,
            backgroundColor: "#ffffff",
            //backgroundColor: "#ebecf0",
            margin: "6px 0",
            padding: 5,
            cursor: "pointer",
            boxShadow: "-4px 4px 4px -1px rgba(34, 60, 80, 0.14)",
            '&:hover': {
                backgroundColor: "#f0f2f7",

            }
        }
    }),
);

function Task(props: TaskPropsType) {
    const classes = useStyles();

    {
        props.tasks.map(task => {
            return (
                <div className={classes.task}>
                <span>
                    {task.text}
                </span>
                </div>
            );
        })
    }
}

export default Task;