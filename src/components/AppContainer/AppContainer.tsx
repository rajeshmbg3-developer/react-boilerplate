import { Outlet } from "react-router-dom";
import { NAV_ITEMS_PORTFOLIO } from "src/constants";
import PageHeader from "src/shared/PageHeader/PageHeader";

const AppContainer: React.FC<React.PropsWithChildren<any>> = () => {
  const navItems = NAV_ITEMS_PORTFOLIO;
  return (
    <>
      <PageHeader navItems={navItems}></PageHeader>
      <Outlet></Outlet>
    </>
  );
};

export default AppContainer;
