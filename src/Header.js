import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Email, GitHub, LinkedIn, Menu } from "@mui/icons-material";

function Header() {
  return (
    <Box minHeight={"10vh"} sx={{ padding: 0 }} color="primary">
      <AppBar sx={{ minHeight: "inherit", justifyContent: "center" }}>
        <Toolbar sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              color: "secondary.main",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Josh Faaborg | Web Developer
          </Typography>
          <Box>
            <IconButton
              size="large"
              href="https://www.linkedin.com/in/jlfaaborg"
              color="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              size="large"
              href="https://github.com/Jlfaaborg"
              color="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </IconButton>
            <IconButton
              size="large"
              variant="contained"
              href="mailto:jlfaaborg@gmail.com"
              color="secondary"
              target="_blank"
              rel="noopener noreferrer"
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
