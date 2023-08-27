import React from 'react';
import spa_one from "../assets/spa-2.jpg";
import { makeStyles } from '@mui/styles';
import { Button, Grid, Typography, Box } from '@mui/material';

const useStyles = makeStyles({
    heroSection: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${spa_one})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6
    },
    heading: {
        color: 'white',
        fontSize: '3.5rem !important',
        marginBottom: 2,
        '@media (min-width:600px)': {
            fontSize: '5rem'
        },
        whiteSpace: 'normal',
        overflowWrap: 'break-word'
    },
    button: {
        marginBottom: 2,
        color: 'white !important',
        borderColor: 'white',
        '&:hover': {
            backgroundColor: '#1976d2 !important'
        }
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%'
    }
});

export const Home = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.heroSection}>
            <Grid item xs={12} md={6}>
                <Typography className={classes.heading}>
                    {`Relax, Rejuvenate, Refresh`}
                </Typography>
                <Box className={classes.buttonContainer}>
                    <Button variant='outlined' className={classes.button}>{`Schedule Appointment`}</Button>
                    <Button variant='outlined' className={classes.button}>{`Book a Last Minute Appointment`}</Button>
                    <Button variant='outlined' className={classes.button}>{`Purchase a Gift Card`}</Button>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
        </Grid>
    )
}
