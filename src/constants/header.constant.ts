import { AuthRoutesMap, PrivateRoutesMap, PublicRoutesMap } from "src/routes/config";
import { IconsNameType } from "src/shared/Icons";

export type PathType = keyof typeof PrivateRoutesMap | keyof typeof PublicRoutesMap | keyof typeof AuthRoutesMap;

export type NavItemsType = {
  key: string;
  label: string;
  icon: IconsNameType;
  path: PathType;
  isRelativeRoute?: boolean;
};

export const NAV_ITEMS_PORTFOLIO: NavItemsType[] = [
  { key: "heder-label-home", label: "Home", icon: "home", path: "PORTFOLIO", isRelativeRoute: true },
  { key: "heder-label-about", label: "About", icon: "home", path: "ABOUT", isRelativeRoute: true },
  { key: "heder-label-projects", label: "Projects", icon: "home", path: "PROJECTS", isRelativeRoute: true },
  { key: "heder-label-logout", label: "Logout", icon: "home", path: "LOGIN", isRelativeRoute: false },
];
