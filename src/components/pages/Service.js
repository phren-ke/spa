import React from 'react';
import { useParams } from 'react-router';
import { services } from '../utils/services';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles({

    container: {
        textAlign: 'left',
        margin: 4
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
    pricingSection: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '20px',
        marginBottom: '20px'
    },
    servicePricing: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '10px',
        alignItems: 'center',
        borderBottom: '1px solid #e1e1e1',
        padding: '5px 0'
    },
    serviceTitle: {
        fontWeight: 'bold'
    },
    serviceDetails: {
        display: 'flex',
        alignItems: 'center',
    },
    reservationButton: {
        marginTop: '20px',
        alignSelf: 'center'
    }
})

const Service = () => {
    const { serviceId } = useParams();
    const classes = useStyles();
    const service = services.find(s => s.id === parseInt(serviceId));
    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div className={classes.container}>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <img src={service.imageUrl} alt={service.title} className={classes.carouselImage} />
            <p>{service.notes}</p>
            <div className={classes.pricingSection}>
                <div className={classes.servicePricing}>
                    <div className={classes.serviceDetails}>
                        <span className={classes.serviceTitle}>Face Cleaning </span> / {service.face.duration}
                    </div>
                    <span>{service.face.price}</span>
                </div>
                <div className={classes.servicePricing}>
                    <div className={classes.serviceDetails}>
                        <span className={classes.serviceTitle}>Massage </span> / {service.massage.duration}
                    </div>
                    <span>{service.massage.price}</span>
                </div>
            </div>
            <Button variant="outlined" color="primary" className={classes.reservationButton}>
                Reserve Now
            </Button>
        </div>
    );
}

export default Service;