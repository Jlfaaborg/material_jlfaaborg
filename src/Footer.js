import React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

function Footer() {
  const [route, setRoute] = React.useState(0);

  useEffect(() => {
    console.log("effect");
  }, [route]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "black",
      }}
    >
      <BottomNavigation
        sx={{
          height: "10vh",
          display: "flex",
          justifyContent: "space-evenly",
        }}
        showLabels
        value={route}
        onChange={(event, newValue) => {
          setRoute(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction label="About" icon={<InfoIcon />} />
        <BottomNavigationAction
          label="Contact"
          icon={<ConnectWithoutContactIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
