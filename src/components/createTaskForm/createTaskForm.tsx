import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useContext,
} from 'react';
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
import { TaskStatusChangedContext } from '../../context';

export const CreateTaskForm: FC = (): ReactElement => {
  // Declare component states
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.medium);

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const tasksUpdatedContext = useContext(TaskStatusChangedContext);

  // Create task mutation
  // const createTaskMutation = useMutation((data: ICreateTask) => {
  //   sendApiRequest('http://localhost:3200/tasks', 'POST', data);
  // });

  const createTaskMutation = useMutation<unknown, Error, ICreateTask>({
    mutationFn: (data: ICreateTask) => {
      return sendApiRequest('http://localhost:3200/tasks', 'POST', data);
    },
  });

  function createTaskHandler() {
    if (!title || !date || !description) {
      return;
    }
    const task: ICreateTask = {
      title,
      description,
      date,
      status,
      priority,
    };
    createTaskMutation.mutate(task);
  }

  /**
   * Manage side effects inside the application
   */

  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowSuccess(true);
      tasksUpdatedContext.toggle();
    }

    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 7000);

    return () => {
      clearTimeout(successTimeout);
    };
  }, [createTaskMutation.isSuccess]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      {showSuccess && (
        <Alert severity="success" sx={{ width: '100%', marginBottom: '16px' }}>
          <AlertTitle>Success</AlertTitle>
          The task has been created successfully!
        </Alert>
      )}

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
              { value: Priority.low, label: Priority.low },
              { value: Priority.medium, label: Priority.medium },
              { value: Priority.high, label: Priority.high },
            ]}
          />
        </Stack>
        <LinearProgress />
        <Button
          onClick={createTaskHandler}
          variant="contained"
          size="large"
          fullWidth
        >
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};
