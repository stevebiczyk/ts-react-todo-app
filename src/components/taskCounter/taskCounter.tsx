import React, { FC, ReactElement} from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { ITaskCounter } from "./interfaces/ITaskCounter";
import { Status } from "../createTaskForm/enums/Status";
import { emitCorrectBorderColor } from "./helpers/emitCorrectBorderColor";

export const TaskCounter: FC<ITaskCounter> = (
    props,
): ReactElement => {
    //destructuring the props
    const { count = 0, status = Status.completed } = props;
    return (
        <>
        <Box 
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        >
            <Avatar
            sx={{
                backgroundColor: "transparent",
                border: "5px solid",
                width: "96px",
                height: "96px",
                marginBottom: "16px",
                borderColor: `${emitCorrectBorderColor(status)}`,
                }}
            >
                <Typography color="#ffffff" variant="h4">10</Typography>
            </Avatar>
                <Typography 
                color="#ffffff"
                fontWeight="bold"
                fontSize="20px"
                variant="h5"

                >Subtitle</Typography>
        </Box>
        </>
    )
};