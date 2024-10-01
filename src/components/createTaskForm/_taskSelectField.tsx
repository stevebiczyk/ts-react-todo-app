import React, { FC, ReactElement } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { iSelectField } from "./interfaces/iSelectField";

export const TaskSelectField: FC<iSelectField> = (props): ReactElement => {
    //destructure the props
    const { 
        name = "selectBox", 
        label = "Select Box", 
        value = "", 
        items = [{value: "", label: "Add Items"}], 
        disabled = false, 
        onChange (event: SelectChangeEvent) => console.log(event) } = props;
    return <FormControl fullWidth size="small">
        <InputLabel id={`${name}-id`}>{label}</InputLabel>
        <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
        >
            {items.map((item, index) => (
                <MenuItem key={item.value+index} value={item.value}>{item.label}</MenuItem>
            ))}
        </Select>
    </FormControl>
};