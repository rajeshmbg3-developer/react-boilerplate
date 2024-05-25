import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import usePorfolioStyles from "./Portfolio.styles";
import { useState } from "react";
import { HEADER_ITEMS } from "src/constants";

const Portfolio: React.FC = () => {
  const headerItems = HEADER_ITEMS;
  const classes = usePorfolioStyles();
  const [value, setValue] = useState(0);
  const onChangeNavItem = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div>
      <header className={classes.header + " px-10 bg-white shadow-lg py-5"}>
        <div className="flex justify-between w-full text-black">
          <div className="logo">Logo</div>
          <div className="">
            <BottomNavigation showLabels value={value} onChange={onChangeNavItem}>
              {headerItems.map(({ key, label, icon }) => (
                <BottomNavigationAction className={"text-black"} key={key} label={label} />
              ))}
            </BottomNavigation>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Portfolio;
