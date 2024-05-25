import React from "react";
import * as Icons from "./Icons";

export const IconsMap = {
  pageNotFound: Icons.PageNotFound,
  home: Icons.Home,
};

export type IconsNameType = keyof typeof IconsMap;

type AppIconProps = {
  name: IconsNameType;
};

type AppIconType = AppIconProps & Record<string, any>;

const AppIcon: React.FC<AppIconType> = ({ name, ...otherPorps }) => {
  const IconComponent = IconsMap[name];
  return <IconComponent {...otherPorps} />;
};

export default AppIcon;
