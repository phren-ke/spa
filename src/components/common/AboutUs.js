import React from 'react'
import {
  Box,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  about: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '16px',
  },
  paragraph: {
    marginTop: '16px',
    marginBottom: '16px',
    color: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    padding: '16px'
  }

});

function AboutUs() {
  const classes = useStyles();
  return (
    <Box className={classes.about}>
      <Typography variant='h3'>About Us</Typography>
      <Typography className={classes.paragraph}>We blend the timeless art of massage, the precision of salon services,<br /> and the science of skin care to create an unforgettable oasis of beauty and relaxation.<br />
        Our expert therapists and stylists are dedicated to rejuvenating your body, refreshing your style, and restoring your skin's natural glow, <br />
        ensuring every visit leaves you feeling revitalized and confident.</Typography>
    </Box>
  )
}

export default AboutUs