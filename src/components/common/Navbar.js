import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import img from "../assets/logo.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const pages = [
    { page: "Products", url: "/Products", title: "Products" },
    { page: "Services", url: "/Pricing", title: "Services" },
    { page: "About us", url: "/About", title: "About us" },
    { page: "Contact us", url: "/Blog", title: "Contact us" },
    { page: "Login", url: "/Login", title: "Login" },
]
const settings = [
    { page: "Profile", url: "/Profile", title: "Profile" },
    { page: "Account", url: "/Account", title: "Account" },
    { page: "Dashboard", url: "/Dashboard", title: "Dashboard" },
    { page: "Logout", url: "/Logout", title: "Logout" },
]

function Navbar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isAuthenticated = localStorage.getItem("token");

    useEffect(() => {
        if (isAuthenticated === null) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, [isAuthenticated]);

    const logOut = async () => {
        setIsLoggedIn(false);
        localStorage.removeItem("token")
        navigate("/Login");
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {"SPA"}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((item, key) => (
                                <MenuItem key={key} onClick={handleCloseNavMenu}>
                                    <Link to={item?.url} textAlign="center" style={{ textDecoration: 'none' }}>
                                        <Button
                                            sx={{ display: 'block' }}
                                        >
                                            {item?.title}
                                        </Button>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {"SPA"}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((item, key) => (
                            // {isLoggedIn && item.page === "Login"}
                            <Link to={item?.url} style={{ textDecoration: 'none' }}>
                                <Button
                                    key={key}
                                    to={item?.url}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {item?.page}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    {isLoggedIn ?
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Maina" src={img} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings?.map((setting, key) => (
                                    <MenuItem key={key} onClick={handleCloseUserMenu}>
                                        {setting?.page === "Logout" ? <Link to="/Login" onClick={logOut} textAlign="center" style={{ textDecoration: 'none' }}>
                                            <Button
                                                sx={{ display: 'block' }}
                                            >
                                                {"Logout"}
                                            </Button>
                                        </Link> : <Link to={setting?.url} textAlign="center" style={{ textDecoration: 'none' }}>
                                            <Button
                                                sx={{ display: 'block' }}
                                            >
                                                {setting?.title}
                                            </Button>
                                        </Link>}

                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box> : null}


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;