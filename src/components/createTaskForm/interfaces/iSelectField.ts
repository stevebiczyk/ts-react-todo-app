import { IDisabled } from './IDisabled';
import { SelectChangeEvent } from '@mui/material';

export interface iSelectItems {
  value: string;
  label: string;
}

export interface iSelectField extends IDisabled {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (event: SelectChangeEvent) => void;
  items?: iSelectItems[];
}
