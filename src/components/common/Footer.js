import { Facebook, Instagram, LocationOn, Twitter } from '@mui/icons-material';
import {
    Box,
    Button,
    Grid,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    footer: {
        backgroundColor: '#1976d2',
        width: '100%',
        color: 'white',
        fontSize: '25px',
        flexShrink: 0,
        bottom: 0,
        left: 0,
        zIndex: 1000
    },
    link: {
        textDecoration: 'none'
    },
    iconButton: {
        color: '#fff !important'
    }
});


export const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Box>
                <Toolbar>
                    <Grid container direction="row" alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Link className={classes.link} to="/Products">
                                <Button
                                    sx={{ color: 'white', }}
                                >
                                    {"Products"}
                                </Button>
                            </Link>
                            <Link variant="body2" to="/Services" style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{ color: 'white', }}
                                >
                                    {"Services"}
                                </Button>
                            </Link>
                            <Link variant="body2" to="/Blog" style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{ color: 'white', }}
                                >
                                    {"Blogs"}
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <IconButton href="https://facebook.com" className={classes.iconButton}>
                                <Facebook />
                            </IconButton>
                            <IconButton href="https://twitter.com" className={classes.iconButton}>
                                <Twitter />
                            </IconButton>
                            <IconButton href="https://instagram.com" className={classes.iconButton}>
                                <Instagram />
                            </IconButton>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <Typography variant="body2">
                                <LocationOn />
                                {"Mathare Valley, Nairobi"}
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Typography variant="body2">{`Copyright © ${new Date().getFullYear()} Phren Inc`}</Typography>
            </Box>
        </div >
    );
}