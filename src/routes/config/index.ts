import Login from "src/auth-layout/Login/Login";
import { RouteType } from "../routes.types";
import PageNotFound from "src/pages/PageNotFound";
import Portfolio from "src/pages/Portfolio";

export const ROOT_PATH = "/";
export const APP_BASE_ROUTE = "app";

export const AuthRoutesMap = {
  LOGIN: { pathId: "login", absolutePath: "/login" },
};

export const PublicRoutesMap = {
  PAGE_NOT_FOUND: { pathId: "page-not-found", absolutePath: "/page-not-found" },
};

export const PrivateRoutesMap = {
  PORTFOLIO: { pathId: "portfolio", absolutePath: `/${APP_BASE_ROUTE}/portfolio` },
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
    children: [
      {
        id: "profile",
        showInSideNavigation: false,
        component: Portfolio,
        isRelativeRoute: false,
        path: PrivateRoutesMap.PORTFOLIO,
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
