// import React, { FC, ReactElement } from 'react';

// import { Box, Button, Switch, FormControlLabel } from '@mui/material';
// import { ITaskFooter } from './interfaces/ITaskFooter';
// import PropTypes from 'prop-types';
// import { Status } from '../createTaskForm/enums/Status';

// export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
//   //destructuring the props
//   const {
//     id,
//     status,
//     onStatusChange = (e) => console.log(e),
//     onClick = (e) => console.log(e),
//   } = props;
//   return (
//     <Box
//       display="flex"
//       justifyContent="space-between"
//       alignItems="center"
//       mt={4}
//     >
//       <FormControlLabel
//         label="In Progress"
//         control={
//           <Switch
//             onChange={onStatusChange}
//             color="warning"
//             defaultChecked={status === Status.inProgress}
//           />
//         }
//       />
//       <Button
//         variant="contained"
//         color="success"
//         size="small"
//         sx={{ color: 'white' }}
//         onClick={onClick}
//       >
//         Mark as Completed
//       </Button>
//     </Box>
//   );
// };

// TaskFooter.propTypes = {
//   onStatusChange: PropTypes.func,
//   onClick: PropTypes.func,
//   id: PropTypes.string.isRequired,
//   status: PropTypes.string,
// };
import React, { FC, ReactElement } from 'react';
import { Box, Button, Switch, FormControlLabel } from '@mui/material';
import { Status } from '../createTaskForm/enums/Status';

interface ITaskFooter {
  id: string;
  status?: string;
  onStatusChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
}

export const TaskFooter: FC<ITaskFooter> = ({
  id,
  status = Status.todo,
  onStatusChange = () => {},
  onClick = () => {},
}): ReactElement => {
  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onStatusChange(event, id);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick(event, id);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            onChange={handleStatusChange}
            color="warning"
            checked={status === Status.inProgress}
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: 'white' }}
        onClick={handleClick}
      >
        Mark as Completed
      </Button>
    </Box>
  );
};
