import {
  Avatar,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import React, { useCallback } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import GitHub from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import { Lock } from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import { loginformValidation } from "src/utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import { PrivateRoutesMap } from "src/routes/config";
import { SimpleInput } from "src/components/FromComponents";

export type LoginType = {
  email: string;
  password: string;
};

const Login: React.FC = (): JSX.Element => {
  const navigateTo = useNavigate();

  const resolver = yupResolver(loginformValidation);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginType>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver,
  });

  const onSubmit = useCallback((data: LoginType): void => {
    console.info("LOGIN SUCCESSFUL", data);
    const portfolio = PrivateRoutesMap.PORTFOLIO.absolutePath;
    navigateTo(portfolio);
  }, []);

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
                <SimpleInput
                  inputId="login-form-email-input"
                  name="email"
                  control={control}
                  error={errors.email}
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <SimpleInput
                  inputId="login-form-password-input"
                  name="password"
                  control={control}
                  error={errors.password}
                  isPasswordField
                  label="Password"
                />
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
