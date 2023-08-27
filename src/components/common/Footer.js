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

export const Footer = () => {
    return (
        <div className='footer'>
            <Box >
                <Toolbar >
                    <Grid container direction="row" alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Link variant="body2" to="/Products" style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{ color: 'white', }}
                                >
                                    {"Products"}
                                </Button>
                            </Link>
                            <Link variant="body2" to="/Pricing" style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{ color: 'white', }}
                                >
                                    {"Pricing"}
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
                        <Grid item xs={12} md={4} >
                            <IconButton href="https://facebook.com" sx={{ color: "#fff" }}>
                                <Facebook />
                            </IconButton>
                            <IconButton href="https://twitter.com" sx={{ color: "#fff" }}>
                                <Twitter />
                            </IconButton>
                            <IconButton href="https://instagram.com" sx={{ color: "#fff" }}>
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
        </div>
    );
}