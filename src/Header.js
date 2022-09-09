import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Email, GitHub, LinkedIn, Menu } from "@mui/icons-material";

function Header() {
  return (
    <Box sx={{ height: "10vh", padding: 0 }} color="primary">
      <AppBar sx={{}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "secondary.main" }}>
            Josh Faaborg | Web Developer
          </Typography>
          <Box>
            <IconButton
              size="large"
              href="https://www.linkedin.com/in/jlfaaborg"
              color="secondary"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              size="large"
              href="https://github.com/Jlfaaborg"
              color="secondary"
            >
              <GitHub />
            </IconButton>
            <IconButton
              size="large"
              variant="contained"
              href="mailto:jlfaaborg@gmail.com"
              color="secondary"
            >
              <Email />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
