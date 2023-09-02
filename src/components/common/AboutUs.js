import React from 'react'
import {
    Box,
    Typography,
} from '@mui/material';
function AboutUs() {
  return (
  <Box display='flex'flexDirection= 'column'sx={{justifyContent:'center', mt:1}}>
    <Typography variant='h3'>About Us</Typography>
    <Typography my={2} color='text.secondary'sx={{textAlign:'center', p:2}}>We blend the timeless art of massage, the precision of salon services,<br/> and the science of skin care to create an unforgettable oasis of beauty and relaxation.<br/>
     Our expert therapists and stylists are dedicated to rejuvenating your body, refreshing your style, and restoring your skin's natural glow, <br/>
     ensuring every visit leaves you feeling revitalized and confident.</Typography>
  </Box>
  )
}

export default AboutUs