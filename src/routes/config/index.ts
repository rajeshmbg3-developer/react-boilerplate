import Login from "src/auth-layout/Login/Login";
import { RouteType } from "src/models";
import PageNotFound from "src/pages/PageNotFound/PageNotFound";

export const ROOT_PATH = "/";

export const AuthRoutesMap = {
  LOGIN: { pathId: "login", absolutePath: "/login" },
};

export const PublicRoutesMap = {
  PAGE_NOT_FOUND: { pathId: "page-not-found", absolutePath: "/page-not-found" },
};

export const PrivateRoutesMap = {};

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
    id: "root--page-not-found",
    showInSideNavigation: false,
    component: PageNotFound,
    path: PublicRoutesMap.PAGE_NOT_FOUND,
    permission: ["public"],
  },
];
