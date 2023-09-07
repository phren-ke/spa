import React from "react";
import { TextField, Button, Grid, Hidden, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Map from '../common/Map';
import image from "../assets/gallery/gallery-1.jpg"

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
    formContainer: {
        flex: 1,
        padding: "20px",
        [theme.breakpoints.down("sm")]: {
            order: 2,
            borderTopLeftRadius: "20px !important",
            borderTopRightRadius: "20px !important"
        },
    },
    mapContainer: {
        flex: 1,
        [theme.breakpoints.down("sm")]: {
            order: 1,
            height: "50vh",
        },
    },
    map: {
        width: "100%",
        height: "100%",
    },
    title: {
        fontSize: "24px",
        marginBottom: "20px",
    },
    textField: {
        width: "100%",
        marginBottom: "15px",
    },
    textArea: {
        width: "100%",
        marginBottom: "20px",
    },
    button: {
        width: "100%",
    },
    infoCard: {
        marginBottom: "10px",
        border: "1px solid #e0e0e0",
        boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
        borderRadius: "10px",
    },
    infoCardContainer: {
        marginBottom: "20px",
        height: "auto"
    },
    cardContent: {
        minHeight: "150px"
    }
}));

const ContactUs = () => {
    const classes = useStyles();

    return (
        <>
            <Typography variant='h3' align="center">Contact Us</Typography>
            <div className={classes.container}>
                <div className={classes.formContainer}>
                    <Hidden smDown>
                        <Grid container spacing={2} className={classes.infoCardContainer}>
                            <Grid item sm={4}>
                                <Card className={classes.infoCard}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h6">Address</Typography>
                                        <Typography variant="body2">1234 Street Name, City, Country</Typography>
                                        <Typography variant="body2">Suite 100</Typography>
                                        <Typography variant="body2">ZIP Code: 12345</Typography>
                                        <Typography variant="body2">
                                            Office Hours: Mon-Fri, 9am-5pm
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item sm={4}>
                                <Card className={classes.infoCard}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h6">Email</Typography>
                                        <Typography variant="body2">info@yourwebsite.com</Typography>
                                        <Typography variant="body2">support@yourwebsite.com</Typography>
                                        <Typography variant="body2">
                                            For press inquiries: press@yourwebsite.com
                                        </Typography>
                                        <Typography variant="body2">
                                            Response time: Within 24 hours
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item sm={4}>
                                <Card className={classes.infoCard}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h6">Phone</Typography>
                                        <Typography variant="body2">+123 456 7890</Typography>
                                        <Typography variant="body2">Fax: +123 456 7891</Typography>
                                        <Typography variant="body2">
                                            Customer Service: +123 456 7892
                                        </Typography>
                                        <Typography variant="body2">
                                            Office Hours: Mon-Fri, 9am-5pm
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden smDown>
                        <Grid container spacing={2} className={classes.infoCardContainer}>
                            <Grid item sm={4}>
                                <Card className={classes.infoCard}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h6">Technical Support</Typography>
                                        <Typography variant="body2">Help Line: +123 456 7893</Typography>
                                        <Typography variant="body2">Email: support@yourwebsite.com</Typography>
                                        <Typography variant="body2">Working Hours: Mon-Fri, 9am-6pm</Typography>
                                        <Typography variant="body2">We are here to assist you with any technical issues.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item sm={4}>
                                <Card className={classes.infoCard}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h6">Product Advice</Typography>
                                        <Typography variant="body2">Consultation Line: +123 456 7894</Typography>
                                        <Typography variant="body2">Email: advice@yourwebsite.com</Typography>
                                        <Typography variant="body2">Find the best products tailored to your needs.</Typography>
                                        <Typography variant="body2">Get expert advice and tips.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item sm={4}>
                                <Card className={classes.infoCard}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h6">Product Billing & Pricing</Typography>
                                        <Typography variant="body2">Billing Line: +123 456 7895</Typography>
                                        <Typography variant="body2">Email: billing@yourwebsite.com</Typography>
                                        <Typography variant="body2">Inquiries: Mon-Fri, 9am-5pm</Typography>
                                        <Typography variant="body2">For all your billing and pricing queries.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <form noValidate autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    placeholder="Enter full name"
                                    fullWidth
                                    className={classes.textField}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    placeholder="Enter email"
                                    fullWidth
                                    className={classes.textField}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    className={classes.textArea}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" className={classes.button}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>

                <div className={classes.mapContainer}>
                    <Map />
                </div>
            </div>
        </>
    );
};

export default ContactUs;
