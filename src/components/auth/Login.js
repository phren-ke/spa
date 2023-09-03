import React, { useState } from "react";
import axios from "axios";
import { Grid, TextField, Button, Link, Container, Avatar, Typography, Box, InputLabel, InputAdornment, FormControl, OutlinedInput, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SpaIcon from '@mui/icons-material/Spa';
import { makeStyles } from '@mui/styles';
import { themeOptions } from "../../theme";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Visibility, VisibilityOff } from "@mui/icons-material";

const url = "http://localhost:4000"

const initialValues = Object.freeze({
  email: "",
  password: "",
});

const useStyles = makeStyles({
  card: {
    marginTop: "20px !important",
    marginBottom: "20px !important",
    padding: "20px !important",
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    "&.MuiAvatar-root": {
      backgroundColor: themeOptions.palette.primary.main,
    },
    marginBottom: "10px !important"
  },
  btnLogin: {
    margin: "15px 0",
    borderRadius: "20px !important"
  },
  ssoButton: {
    margin: "2px !important",
    borderRadius: "20px !important"
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: "20px !important",
      }
    }
  },
  link: {
    color: themeOptions.palette.primary.main
  },
  centerItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noBrowserIcon: {
    '&::-ms-reveal': {
      display: 'none !important',
    },
    '&::-webkit-reveal': {
      display: 'none !important',
    },
  }
});

export const Login = () => {
  const [formData, setFormData] = useState(initialValues);
  const navigate = useNavigate();
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${url}/auth/login`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data.success) {
        Swal.fire({
          title: "Success",
          text: `${formData.email} Logged In Successfully`,
          icon: "success",
        });
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: "Login Failed",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Login Failed",
      });
    }
  };
  return (
    <Container maxWidth="md" className={classes.card}>
      <form onSubmit={login}>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12} className={classes.centerItem}>
            <Avatar className={classes.avatar}>
              <SpaIcon />
            </Avatar>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Sign In to Continue
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic-email"
              label="Email"
              name="email"
              value={formData.email || ""}
              onChange={onChange}
              variant="outlined"
              fullWidth
              size="small"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" size="small" fullWidth className={classes.textField}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                name="password"
                className={classes.noBrowserIcon}
                value={formData.password}
                onChange={onChange}
                type={showPassword ? 'text' : 'password'}
                label="Password"
                autoComplete="new-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" className={classes.btnLogin} type="submit" size="medium" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link href="/ForgotPassword" className={classes.link}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" className={classes.ssoButton} startIcon={<GoogleIcon />} fullWidth>
              Google
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" className={classes.ssoButton} startIcon={<FacebookIcon />} fullWidth>
              Facebook
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center" marginTop={3}>
              <Typography variant="body2">
                Don't have an account? <Link href="/Register" className={classes.link}>Register</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
