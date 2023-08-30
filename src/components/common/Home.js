import React from 'react';
import { services } from '../utils/services';
import { CustomCard } from './CustomCard';
import Carousel from 'react-material-ui-carousel';
import { carousel } from '../utils/carousel';
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
        justifyContent: 'center',
        padding: 6
    },
    heading: {
        color: 'white',
        fontSize: '5rem !important',
        marginBottom: 2,
        marginTop: "350px !important",
        '@media (max-width:600px)': {
            fontSize: '3.5rem !important',
            marginTop: "250px !important"
        },
        whiteSpace: 'normal',
        overflowWrap: 'break-word'
    },
    button: {
        marginBottom: 2,
        color: 'white !important',
        borderColor: 'white',
        borderRadius: '20px !important',
        '&:hover': {
            backgroundColor: '#1976d2 !important'
        }
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%'
    },
    carouselItem: {
        position: 'relative',
        overflow: 'hidden',
    },
    carouselImage: {
        width: '100%',
        height: '550px',
        objectFit: 'cover',
        position: 'relative',
        filter: 'blur(2px)',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1))',
            zIndex: 1,
        }
    },
    carouselTextContainer: {
        position: 'absolute',
        top: '50%',
        left: '10%',
        transform: 'translateY(-50%)',
        textAlign: 'center',
        width: '80%',
        zIndex: 2
    },
    carouselText: {
        color: '#1976d2',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        display: 'block',
        marginBottom: '5px'
    },
    carouselButton: {
        marginTop: '5px',
        color: '#1976d2 !important'
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(345px, 1fr))',
        gap: 5,
        margin: 1,
        marginBottom: "30px"
    },
    card: {
        maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        '@media (max-width: 600px)': {
            maxWidth: '100% !important',
        },
    },
    media: {
        height: 194,
        width: '100%',
        objectFit: 'cover',
    }
});

export const Home = () => {
    const classes = useStyles();
    return (
        <>
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
            <Carousel>
                {carousel.map((item, index) => (
                    <div key={index} className={classes.carouselItem}>
                        <img
                            className={classes.carouselImage}
                            src={item.imageUrl}
                            alt={item.description}
                        />
                        <div className={classes.carouselTextContainer}>
                            <span className={classes.carouselText}>
                                {item.description}
                            </span>
                            <Button
                                variant="outlined"
                                color="primary"
                                className={classes.carouselButton}
                            >
                                Book Now
                            </Button>
                        </div>
                    </div>
                ))}
            </Carousel>
            <div className={classes.container}>
                {services.map((service, index) => {
                    return (
                        <CustomCard key={index} {...service}></CustomCard>
                    )
                })}
            </div>
        </>
    )
}
