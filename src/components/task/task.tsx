import React, { FC, ReactElement} from 'react';
import { Box } from '@mui/material';
import { TaskHeader } from './_taskHeader';
import { TaskFooter } from './_taskFooter';
import { TaskDescription } from './_taskDescription';

export const Task: FC = (props): ReactElement => {
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
        borderColor: "error.light",
    }}
    >
        <TaskHeader />
        <TaskDescription />
        <TaskFooter />
    </Box>
    )
};