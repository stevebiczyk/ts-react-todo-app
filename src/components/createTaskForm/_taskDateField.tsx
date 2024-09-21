import  React, {FC, ReactElement, useState} from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { IDateField } from './interfaces/IDateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PropTypes from 'prop-types';
import { TextField, TextFieldProps } from '@mui/material';


export const TaskDateField: FC = (): ReactElement => {
    // state
    const [date, setDate] = useState<Date | null>(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Task Date"
                // inputFormat="dd/MM/yyyy"
                value={date}
                onChange={(newValue) => setDate(newValue)}
                renderInput={(params: TextFieldProps) => (<TextField {...params} />)}
            />
        </LocalizationProvider>
    );
};