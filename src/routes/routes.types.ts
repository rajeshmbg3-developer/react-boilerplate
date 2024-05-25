export type PermissionType = "admin" | "super_admin" | "public" | "private";
export type RouteType = {
  id: string;
  component?: React.ElementType;
  path?: { absolutePath: string; pathId: string };
  redirectForAuthenticatedUser?: boolean;
  title?: string;
  iconName?: string; //IconNameType
  isRelativeRoute?: boolean;
  permission?: PermissionType[];
  children?: RouteType[];
  showInSideNavigation: boolean;
};
