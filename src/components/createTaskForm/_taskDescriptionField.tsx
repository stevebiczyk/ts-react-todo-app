import React, { FC, ReactElement } from 'react';

import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';

export const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
  // Destructure props
  const { onChange = (e) => console.log(e.target.value), disabled = false } =
    props;

  return (
    <TextField
      id="description"
      name="description"
      label="Task Description"
      placeholder="Task Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
