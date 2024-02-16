import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
// import makeStyles from '@mui/styles/makeStyles';

// const useStyles = makeStyles((theme) => ({
//   mmm: {
//     width: '100%',
//     backgroundColor: 'green'
//   }
// }));

const PublicLayout = () => {
  // const classes = useStyles();
  return (
    <Box
      // className={classes.mmm}
      sx={{
        background: 'radial-gradient(circle at top right,#a691f9 0,#E6FBFE 15%)',
        minHeight: '100vh',
        paddingY: {
          md: 8,
          sm: 15,
          xs: 15
        },
        paddingX: 2
      }}>
      <Outlet />
    </Box>
  )
}
export default PublicLayout;