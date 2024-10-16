import React, { FC, ReactElement, useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from '@mui/material';

import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import { useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ICreateTask } from '../taskArea/interfaces/ICreateTask';

export const CreateTaskForm: FC = (): ReactElement => {
  // Declare component states
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [descripton, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.medium);

  // Create task mutation
  const createTaskMutation = useMutation((data: ICreateTask) => {
    sendApiRequest('http://localhost:3200/tasks', 'POST', data);
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Alert severity="success" sx={{ width: '100%', marginBottom: '16px' }}>
        <AlertTitle>Success</AlertTitle>
        The task has been created successfully!
      </Alert>
      <Typography mb={2} component="h2" variant="h6">
        Create A New Task
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField onChange={(event) => setTitle(event.target.value)} />
        <TaskDescriptionField
          onChange={(event) => setDescription(event.target.value)}
        />
        <TaskDateField value={date} onChange={(date) => setDate(date)} />
        <Stack sx={{ width: '100%' }} direction="row" spacing={2}>
          <TaskSelectField
            label="Status"
            name="status"
            value={status}
            onChange={(event) => setStatus(event.target.value as string)}
            items={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
              {
                value: Status.completed,
                label: Status.completed.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            value={priority}
            onChange={(event) => setPriority(event.target.value as string)}
            items={[
              { value: Priority.low, label: Priority.low.toUpperCase() },
              { value: Priority.medium, label: Priority.medium.toUpperCase() },
              { value: Priority.high, label: Priority.high.toUpperCase() },
            ]}
          />
        </Stack>
        <LinearProgress />
        <Button variant="contained" size="large" fullWidth>
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};
