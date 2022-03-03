import { Box, Typography } from '@mui/material';
import { useStyles } from "./TableStyle";
import { AddButton } from 'components/Buttons';

export const TableHeaderExtra = ({ title }) => {
  const classes = useStyles();
  return (
    <Box className={classes.extraHeadContainer}>
      <Box>
        <Typography className={classes.extraHeadTitle} >
          {title}
        </Typography>
      </Box>
      <Box>
        <AddButton/>
      </Box>
    </Box>
  );
};
