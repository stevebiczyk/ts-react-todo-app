import React, { FC, ReactElement } from 'react';

import { Grid, Box } from '@mui/material';
import { format } from 'date-fns';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Task } from '../task/task';
import { useQuery } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskAPI } from './interfaces/ITaskAPI';

// export const TaskArea: FC = (): ReactElement => {
//   const { error, isLoading, data, refetch } = useQuery('tasks', async () => {
//     return await sendApiRequest<ITaskAPI[]>(
//       'http://localhost:3200/tasks',
//       'GET',
//     );
//   });
export const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      return await sendApiRequest<ITaskAPI[]>(
        'http://localhost:3200/tasks',
        'GET',
      );
    },
  });
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status of your tasks on {''}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};
