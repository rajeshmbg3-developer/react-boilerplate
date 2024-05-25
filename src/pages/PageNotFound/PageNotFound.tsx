import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppIcon from "src/shared/Icons/AppIcon";

const PageNotFound: React.FC = () => {
  const navigateTo = useNavigate();
  const gotoHome = () => navigateTo("/");
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-1/3">
        <AppIcon name="pageNotFound" />
        <br />
        <div className="flex items-center justify-center">
          <Button variant="text" size="large" type="submit" onClick={gotoHome}>
            {"<< Go back to Homepage"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
