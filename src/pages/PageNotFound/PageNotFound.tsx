import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppIcon from "src/shared/Icons/AppIcon";

const PageNotFound: React.FC = () => {
  const navigateTo = useNavigate();
  const gotoHome = () => navigateTo("/");
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Grid container>
        <Grid md={3} lg={4} xs></Grid>
        <Grid item container direction="column" md={6} lg={4} xs={12}>
          <AppIcon name="pageNotFound" />
        </Grid>
        <Grid md={3} lg={4} xs></Grid>
        <Grid item container direction="column">
          <Button fullWidth variant="text" size="small" type="submit" onClick={gotoHome}>
            {"<< Go back to Homepage"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default PageNotFound;
