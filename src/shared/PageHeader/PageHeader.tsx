import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
} from "@mui/material";
import { useState } from "react";
import usePorfolioStyles from "src/pages/Portfolio/Portfolio.styles";
import MenuIcon from "@mui/icons-material/Menu";
import { NavItemsType, PathType } from "src/constants";
import { useNavigate } from "react-router-dom";
import { AuthRoutesMap, PrivateRoutesMap, PublicRoutesMap } from "src/routes/config";

const drawerWidth = 240;

type PageHeaderProps = {
  navItems: NavItemsType[];
};

const PageHeader: React.FC<PageHeaderProps> = ({ navItems }) => {
  const classes = usePorfolioStyles();
  const navigateTo = useNavigate();
  const container = window !== undefined ? () => window.document.body : undefined;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const combinedRoutesMap = {
    ...AuthRoutesMap,
    ...PrivateRoutesMap,
    ...PublicRoutesMap,
  };

  const handleNavItemClick = (path: PathType, isRelativeRoute: boolean) => {
    const route = isRelativeRoute ? combinedRoutesMap[path]?.pathId : combinedRoutesMap[path].absolutePath;
    navigateTo(route);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Rajesh
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ key, label, icon, path, isRelativeRoute }) => (
          <ListItem onClick={() => handleNavItemClick(path, isRelativeRoute!)} key={key} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box className={classes.flex}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Button
              onClick={() => handleNavItemClick("PORTFOLIO", true)}
              key={"app-home-profile"}
              sx={{ color: "#fff" }}
            >
              <Typography variant="h6">Rajesh Malakar</Typography>
            </Button>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ key, label, icon, path, isRelativeRoute }) => (
              <Button onClick={() => handleNavItemClick(path, isRelativeRoute!)} key={key} sx={{ color: "#fff" }}>
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
};

export default PageHeader;
