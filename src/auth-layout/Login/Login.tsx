import {
  Avatar,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import GitHub from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <Card variant="elevation" className="w-[28rem]">
        <CardContent className="!p-10">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container direction="column" justifyContent="center" alignItems="center" spacing={1}>
                <Grid item>
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>
                    <Lock className="mb-1" />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Typography variant="h5" component="div">
                    <span className="font-extrabold">Login</span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="div">
                <span className="size-4 font-bold">Step into Rajesh's profile world 🚀</span>
              </Typography>
              <Typography variant="subtitle2" component="span">
                <span className="text-slate-500">Login now and discover a personalized visit like never before!</span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" fullWidth label="Email"></TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel value="Remember me" control={<Checkbox />} label="Remember me" labelPlacement="end" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth size="large">
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography className="text-center" variant="subtitle2" component="h6">
                <span className="text-slate-500"> Already have an account?</span>
                <Link href="#" underline="none">
                  {" Login instead"}
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider> or </Divider>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <Grid item>
                  <FacebookIcon className="cursor-pointer"></FacebookIcon>
                </Grid>
                <Grid item>
                  <Twitter className="cursor-pointer"></Twitter>
                </Grid>
                <Grid item>
                  <GitHub className="cursor-pointer"></GitHub>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
