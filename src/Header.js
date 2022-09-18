import React, { useState } from "react";

import { Link as L } from "react-router-dom";

import {
  Box,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Menu } from "@mui/icons-material";

import { styled } from "@mui/material/styles";

const Links = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.secondary.main,
  fontSize: "20px",
  "&:hover": {
    color: theme.palette.secondary.main,
    borderBottom: "1px solid white",
  },
}));

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box minHeight={"10vh"} sx={{ paddingX: 5 }} color="primary">
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
          {isMobile ? (
            <Box>
              <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List sx={{ width: "40vw" }}>
                  <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                      <Links component={L} to="/">
                        Home
                      </Links>
                    </ListItemText>
                  </ListItem>
                  <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                      <Links component={L} to="/about">
                        About
                      </Links>
                    </ListItemText>
                  </ListItem>
                  <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                      <Links component={L} to="/contact">
                        Contact
                      </Links>
                    </ListItemText>
                  </ListItem>
                  <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                      <Links component={L} to="/about">
                        Faq
                      </Links>
                    </ListItemText>
                  </ListItem>
                </List>
              </Drawer>
              <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <Menu />
              </IconButton>
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "space-between",
                display: "flex",
                paddingX: "10%",
              }}
            >
              <Links component={L} to="/">
                Home
              </Links>
              <Links component={L} to="/about">
                About
              </Links>
              <Links component={L} to="/contact">
                Contact
              </Links>
              <Links component={L} to="/faq">
                FAQ
              </Links>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
