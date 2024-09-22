import React, { FC, ReactElement } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export const TaskSelectField: FC = (): ReactElement => {
    return <FormControl fullWidth size="small">
        <InputLabel id="status">Status</InputLabel>
        <Select
        labelId="status"
        id="status-select"
        value=""
        label="Status"
        name="status"
        >
            <MenuItem value="todo">Todo</MenuItem>
            <MenuItem value="in-progress">In Progress</MenuItem>
            <MenuItem value="done">Done</MenuItem>
        </Select>
    </FormControl>
};