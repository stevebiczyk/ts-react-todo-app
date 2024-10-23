import { Priority } from '../../createTaskForm/enums/Priority';
import { Status } from '../../createTaskForm/enums/Status';

export interface ITaskAPI {
  id: string;
  title: string;
  description: string;
  date: string;
  status: `${Status}`;
  priority: `${Priority}`;
}
