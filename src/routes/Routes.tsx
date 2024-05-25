import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { RouteType } from "./routes.types";
import RouteElementWrapper from "src/routes/RouteElementWrapper";
import { AuthRoutesMap, PublicRoutesMap, ROOT_PATH, RouterConfig } from "src/routes/config";

const constructRouteMap = (configChildern: RouteType[] | undefined): JSX.Element | JSX.Element[] => {
  if (!configChildern || configChildern.length === 0) return <></>;

  return configChildern.map((routeItem: RouteType) => {
    const { id, children, path, isRelativeRoute } = routeItem;
    if (children && children.length > 0) {
      if (path) {
        return (
          <Route key={`AppRoute-${id}`} path={path.pathId} element={<RouteElementWrapper {...routeItem} />}>
            {constructRouteMap(children)}
          </Route>
        );
      }
      return <Fragment key={`AppRoute-${id}`}>{constructRouteMap(children)}</Fragment>;
    }
    return (
      <Route
        key={`AppRoute-${id}`}
        path={isRelativeRoute ? `${path?.pathId}/*` : path?.absolutePath}
        element={<RouteElementWrapper {...routeItem} />}
      />
    );
  });
};

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {constructRouteMap(RouterConfig)}
        <Route path={ROOT_PATH} element={<Navigate to={AuthRoutesMap.LOGIN.absolutePath} replace />}></Route>
        <Route path="*" element={<Navigate to={PublicRoutesMap.PAGE_NOT_FOUND.absolutePath} replace />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
