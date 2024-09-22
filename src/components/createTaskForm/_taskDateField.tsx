import  React, {FC, ReactElement} from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PropTypes from 'prop-types';
import { TextField, TextFieldProps } from '@mui/material';
import { IDateField } from './interfaces/iDateField';


export const TaskDateField: FC<IDateField> = (
    props,
): ReactElement => {
    //  Destructure props
    const {
        value = new Date(),
        disabled = false,
        onChange = (date) => console.log(date),
    } = props;

    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Task Date"
                // inputFormat="dd/MM/yyyy"
                value={value}
                onChange={onChange}
                disabled={disabled}
                // renderInput={(params: TextFieldProps) => (<TextField {...params} />)}
            />
        </LocalizationProvider>
        </>
    );
};

TaskDateField.propTypes = {
    value: PropTypes.instanceOf(Date),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
};