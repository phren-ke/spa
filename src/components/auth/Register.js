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
  confirmPassword: "",
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
    margin: "8px 2px !important",
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
export const Register = () => {
  const [formData, setFormData] = useState(initialValues);
  const navigate = useNavigate();
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const save = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return Swal.fire({
        title: "Error",
        text: "Passwords do not match",
        icon: "error",
      });
    }
    let data = JSON.stringify({
      email: formData.email || "",
      password: formData.password || "",
    });

    try {
      await axios
        .post(`${url}/auth/register`, data, {
          headers: { "Content-Type": "application/json" },
        })
        .then(() => {
          Swal.fire({
            title: "Success",
            text: `${formData.email} Added successfully`,
            icon: "success",
          });
          navigate("/login");
        });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };
  return (
    <Container maxWidth="md" className={classes.card}>
      <form onSubmit={save}>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12} className={classes.centerItem}>
            <Avatar className={classes.avatar}>
              <SpaIcon />
            </Avatar>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Sign Up to Continue
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
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
                value={formData.password}
                onChange={onChange}
                type={showPassword ? 'text' : 'password'}
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
                label="Password"
                className={classes.noBrowserIcon}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" size="small" fullWidth className={classes.textField}>
              <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
              <OutlinedInput
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={onChange}
                type={showConfirmPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
                className={classes.noBrowserIcon}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" className={classes.btnLogin} type="submit" size="medium" fullWidth>
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" className={classes.ssoButton} startIcon={<GoogleIcon />} fullWidth>
              Sign up with Google
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" className={classes.ssoButton} startIcon={<FacebookIcon />} fullWidth>
              Sign up with Facebook
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center" marginTop={3}>
              <Typography variant="body2">
                Already have an account? <Link href="/Login" className={classes.link}>Login</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
