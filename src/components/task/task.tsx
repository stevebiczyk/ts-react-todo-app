import React, { FC, ReactElement} from 'react';
import { Box } from '@mui/material';
import { TaskHeader } from './_taskHeader';
import { TaskFooter } from './_taskFooter';
import { TaskDescription } from './_taskDescription';
import { ITask } from './interfaces/ITask';
import { Status } from '../createTaskForm/enums/Status';
import { Priority } from '../createTaskForm/enums/Priority';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

export const Task: FC<ITask> = (props): ReactElement => {
    // destructuring props
    const { 
        title = "Task Title",
        date = new Date(),
        description = "Task Description", 
        priority = Priority.medium, 
        status = Status.completed,
        onStatusChange = (e) => console.log(e),
        onClick = (e) => console.log(e),
    } = props;
    return ( 
    <Box 
    display="flex"
    flexDirection="column"
    justifyContent="flex-start"
    width="100%"
    mb={4}
    p={2}
    sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: renderPriorityBorderColor(priority),
    }}
    >
        <TaskHeader title={title} date={date} />
        <TaskDescription description={description}/>
        <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
    )
};
