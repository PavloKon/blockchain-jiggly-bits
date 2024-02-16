import React from 'react';
import { Typography, Box, InputBase, Button, Divider, Stack } from '@mui/material';
import { CardContainer, CardItem, ButtonFirst, ButtonSecond } from '../../../components';

const SectionDaily = () => {
  return (
    <CardContainer>
      <CardItem>
        <Typography variant='body1' color='txtTitle'> Daily Return </Typography>
        <Typography variant='h6' color='txtFirst'> Up to 8% </Typography>
      </CardItem>
      <CardItem>
        <Typography variant='body1' color='txtTitle'> APR </Typography>
        <Typography variant='h6' color='txtFirst'> 2,920% </Typography>
      </CardItem>
      <CardItem sx={{marginBottom: 0}}>
        <Typography variant='body1' color='txtTitle'> Dev Fee </Typography>
        <Typography variant='h6' color='txtFirst'> 3% </Typography>
      </CardItem>
    </CardContainer>
  )
}
export default SectionDaily;