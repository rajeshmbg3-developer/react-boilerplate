import {
  Avatar,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
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
import { useForm } from "react-hook-form";
import { loginformValidation } from "src/utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import useLoginStyle from "./Login.styles";
import { useNavigate } from "react-router-dom";
import { PublicRoutesMap } from "src/routes/config";

export type LoginType = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const classes = useLoginStyle();
  const navigateTo = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const resolver = yupResolver(loginformValidation);
  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginType>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver,
  });

  const onSubmit = (data: LoginType): void => {
    console.info("LOGIN SUCCESSFUL", data);
    const pageNotFound = PublicRoutesMap.PAGE_NOT_FOUND.absolutePath;
    navigateTo(pageNotFound);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
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
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Email"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password" error={!!errors.password}>
                    Password
                  </InputLabel>
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
                    {...register("password")}
                    error={!!errors.password}
                  />
                  <FormHelperText className={errors.password && classes.errorTextColor}>
                    {errors.password ? errors.password.message : ""}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel value="Remember me" control={<Checkbox />} label="Remember me" labelPlacement="end" />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth size="large" type="submit">
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
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Login;
