import Login from "src/auth-layout/Login/Login";
import { RouteType } from "../routes.types";
import PageNotFound from "src/pages/PageNotFound";
import Portfolio from "src/pages/Portfolio";
import AppContainer from "src/components/AppContainer/AppContainer";
import Dashboard from "src/pages/Dashboard";
import About from "src/pages/About/About";
import Projects from "src/pages/Projects/Projects";

export const ROOT_PATH = "/";
export const APP_BASE_ROUTE = "app";

export const AuthRoutesMap = {
  LOGIN: { pathId: "login", absolutePath: "/login" },
  LOGOUT: { pathId: "logout", absolutePath: `/logout` },
};

export const PublicRoutesMap = {
  PAGE_NOT_FOUND: { pathId: "page-not-found", absolutePath: "/page-not-found" },
};

export const PrivateRoutesMap = {
  PORTFOLIO: { pathId: "portfolio", absolutePath: `/${APP_BASE_ROUTE}/portfolio` },
  DASHBOARD: { pathId: "dashboard", absolutePath: `/${APP_BASE_ROUTE}/dashboard` },
  ABOUT: { pathId: "about", absolutePath: `/${APP_BASE_ROUTE}/about` },
  CONTACT: { pathId: "contact", absolutePath: `/${APP_BASE_ROUTE}/contact` },
  PROJECTS: { pathId: "projects", absolutePath: `/${APP_BASE_ROUTE}/projects` },
};

export const RouterConfig: RouteType[] = [
  {
    id: "root-auth",
    showInSideNavigation: false,
    permission: ["public"],
    children: [
      {
        id: "auth-login",
        showInSideNavigation: false,
        component: Login,
        isRelativeRoute: true,
        path: AuthRoutesMap.LOGIN,
        permission: ["public"],
      },
    ],
  },
  {
    id: "root-app",
    showInSideNavigation: false,
    component: AppContainer,
    path: { pathId: APP_BASE_ROUTE, absolutePath: APP_BASE_ROUTE },
    permission: ["private", "admin", "super_admin"],
    children: [
      {
        id: "app--profile-portfolio",
        showInSideNavigation: false,
        component: Portfolio,
        isRelativeRoute: true,
        path: PrivateRoutesMap.PORTFOLIO,
        permission: ["private"],
      },
      {
        id: "app--profile-dashboard",
        showInSideNavigation: false,
        component: Dashboard,
        isRelativeRoute: true,
        path: PrivateRoutesMap.DASHBOARD,
        permission: ["private"],
      },
      {
        id: "app--profile-about",
        showInSideNavigation: false,
        component: About,
        isRelativeRoute: true,
        path: PrivateRoutesMap.ABOUT,
        permission: ["private"],
      },
      {
        id: "app--profile-projects",
        showInSideNavigation: false,
        component: Projects,
        isRelativeRoute: true,
        path: PrivateRoutesMap.PROJECTS,
        permission: ["private"],
      },
    ],
  },
  {
    id: "root--page-not-found",
    showInSideNavigation: false,
    component: PageNotFound,
    path: PublicRoutesMap.PAGE_NOT_FOUND,
    permission: ["public"],
  },
];
