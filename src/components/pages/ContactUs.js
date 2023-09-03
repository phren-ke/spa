import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, TextField, Button, Typography } from '@mui/material';
import Map from '../common/Map';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        backgroundColor: '#ffffff !important'
    },
    mapPlaceholder: {
        height: 200,
        backgroundColor: "#e0e0e0",
        marginBottom: 4,
        zIndex: 10,
        [theme.breakpoints.up('md')]: {
            height: '100%',
            marginBottom: 0
        },
    },
    formContainer: {
        position: 'absolute',
        top: 187,
        left: 0,
        right: 0,
        padding: 3,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 20,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            top: 'auto',
            left: 'auto',
            right: 'auto',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
        }
    },
    label: {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: 1,
        fontWeight: 'bold'
    },
    required: {
        color: 'red',
    },
    fullWidthButton: {
        width: '100%'
    },
    form: {
        marginTop: "20px !important"
    },
    inputSection: {
        margin: "4px !important"
    }
}));

const ContactUs = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div className={classes.formContainer}>
                        <form noValidate autoComplete="off">
                            <Grid container spacing={1} className={classes.form}>
                                <Grid item xs={12} className={classes.inputSection}>
                                    <Typography variant='h4'>Contact Us</Typography>
                                    <Typography className={classes.label}>
                                        Name <span className={classes.required}>*</span>
                                    </Typography>
                                    <TextField
                                        placeholder="Enter full name"
                                        variant="outlined"
                                        fullWidth
                                        size='small'
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.inputSection}>
                                    <Typography className={classes.label}>
                                        Email <span className={classes.required}>*</span>
                                    </Typography>
                                    <TextField
                                        placeholder="Enter email"
                                        variant="outlined"
                                        fullWidth
                                        size='small'
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.inputSection}>
                                    <Typography className={classes.label}>
                                        Message <span className={classes.required}>*</span>
                                    </Typography>
                                    <TextField
                                        variant="outlined"
                                        multiline
                                        rows={3}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.inputSection}>
                                    <Button variant="contained" color="primary" className={classes.fullWidthButton}>
                                        Send
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.mapPlaceholder}>
                        <Map />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default ContactUs;
