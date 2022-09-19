import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

import me from "./content/me.jpg";
import googleAds from "./content/google_ads-official.svg";
import googleAnalytics from "./content/google_analytics-ar21.svg";
import html from "./content/html-5-logo-svgrepo-com.svg";
import js from "./content/js-svgrepo-com.svg";
import css from "./content/css-svgrepo-com.svg";
import gtm from "./content/google-tag-manager.svg";
import resume from "./content/josh_faaborg_web_developer.pdf";
import background from "./content/backgroundVideo.mp4";

import {
  Box,
  Typography,
  Paper,
  IconButton,
  AppBar,
  Toolbar,
  Button,
  Dialog,
  Grow,
  Slide,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Grid,
  Fade,
  Icon,
} from "@mui/material";

import { ExpandMore, KeyboardDoubleArrowUp, Close } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Home() {
  const [open, setOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChangePdf = () => {
    pageNumber === 1 ? setPageNumber(2) : setPageNumber(1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fade timeout={2500} in={true}>
      <Box
        sx={{
          flexGrow: 1,
          textAlign: "center",
          paddingY: 7,
          paddingX: 3,
        }}
      >
        <Paper
          sx={{
            minHeight: "50vh",
            display: "flex",
            backgroundPosition: "center",
            color: "white",
            background: "linear-gradient(to bottom right, #607d8b, #f1dac4)",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
          elevation={12}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              position: "fixed",
              zIndex: -100,
              minHeight: "100vh",
              minWidth: "100vw",
            }}
          >
            <source src={background} type="video/mp4" />
          </video>
          <Box sx={{ flexBasis: "50%", paddingBottom: { xs: 3, md: 0 } }}>
            <Typography
              variant="h3"
              component="div"
              color="primary"
              sx={{ fontSize: { xs: "1.5em", md: "4em" } }}
            >
              Digital Marketer
            </Typography>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexGrow: 1,
                fontSize: { xs: "55px", md: "80px" },
                justifyContent: "space-evenly",
                paddingTop: { xs: "4%", md: "5%" },
              }}
            >
              <Icon fontSize="inherit" sx={{ textAlign: "center" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={googleAds}
                  alt="google ads"
                />
              </Icon>
              <Icon fontSize="inherit" sx={{ textAlign: "center" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={googleAnalytics}
                  alt="google analytics"
                />
              </Icon>
              <Icon fontSize="inherit" sx={{ textAlign: "center" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={gtm}
                  alt="google tag manager"
                />
              </Icon>
            </Box>
          </Box>
          <Box sx={{ flexBasis: "50%" }}>
            <Typography
              variant="h3"
              component="div"
              color="secondary"
              sx={{ flexGrow: 1, fontSize: { xs: "1.5em", md: "4em" } }}
            >
              Turned Web Developer
            </Typography>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexGrow: 1,
                fontSize: { xs: "55px", md: "80px" },
                justifyContent: "space-evenly",
                paddingTop: { xs: "4%", md: "5%" },
              }}
            >
              <Icon fontSize="inherit" sx={{ textAlign: "center" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={html}
                  alt="html"
                />
              </Icon>
              <Icon fontSize="inherit" sx={{ textAlign: "center" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={css}
                  alt="css"
                />
              </Icon>
              <Icon fontSize="inherit" sx={{ textAlign: "center" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={js}
                  alt="javascript"
                />
              </Icon>
            </Box>
          </Box>
        </Paper>
        <Box
          sx={{
            height: "20vh",
            padding: "2%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ fontSize: "50px" }}>
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...(true ? { timeout: 2000 } : {})}
            >
              {<KeyboardDoubleArrowUp fontSize="inherit" color="primary" />}
            </Grow>
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...(true ? { timeout: 6000 } : {})}
            >
              {<KeyboardDoubleArrowUp fontSize="inherit" color="primary" />}
            </Grow>
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...(true ? { timeout: 12000 } : {})}
            >
              {<KeyboardDoubleArrowUp fontSize="inherit" color="primary" />}
            </Grow>
          </Box>
          <Button
            variant="contained"
            sx={{
              fontSize: "25px",
              backgroundColor: "primary.main",
              color: "secondary.main",
            }}
            onClick={handleClickOpen}
          >
            Quick Overview
          </Button>
        </Box>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          transitionDuration={900}
          sx={{
            backgroundColor: "secondary.main",
          }}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="secondary"
                onClick={handleClose}
                aria-label="close"
              >
                <Close />
              </IconButton>
              <Typography
                color={"secondary"}
                sx={{ ml: 2, flex: 1 }}
                variant="h5"
                component="div"
              >
                Quick Overview
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid
            container
            padding={4}
            sx={{
              backgroundColor: "secondary.main",
              minHeight: "fit-content",
              height: "100vh",
            }}
          >
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                textAlign: "center",
              }}
            >
              <Box sx={{}}>
                <Box
                  component="img"
                  sx={{
                    height: { xs: "30vh", md: "70vh" },
                    paddingBottom: 2,
                  }}
                  src={me}
                />
                <Accordion sx={{ textAlign: "left" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>Education & Training</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      2018 - Josh graduated with an A.S. studying Computer
                      Science. During the time, Josh studied C# leading to .NET,
                      where he grew to love web development
                      <br />
                      <br />
                      2021 - Josh attended a bootcamp offered by Revature.
                      During this time, Josh learned Salesforce development and
                      software engineering topics ranging from: Git,
                      Scrum/Agile, test driven development
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ textAlign: "left" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>Digital Marketing</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      2019 - Josh found a job as an SEO Specialist. Josh learned
                      the basics of SEO to advanced technical SEO.
                      <br />
                      <br />
                      2020 - Josh continued his digital marketing journey when
                      he worked as a Project Manager. At that position, Josh was
                      client facing, hands on in development and the digital
                      marketing efforts.
                      <br />
                      <br />
                      Present - Josh is currently a Google Ads and digital
                      marketing expert holding multiple certificates from Google
                      and Microsoft Advertising.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ textAlign: "left" }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>Development Projects</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{}}>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://jlfaaborg.com/wordpress"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WordPress Site
                      </a>{" "}
                      - This is my WordPress portfolio
                      <br />
                      <br />
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://github.com/Jlfaaborg/material_jlfaaborg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        This Site
                      </a>{" "}
                      - This site was coded using React and Material
                      <br />
                      <br />
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://www.clear2land.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Clear2Land
                      </a>{" "}
                      - This site is for a client. Created using WordPress
                      <br />
                      <br />
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://github.com/Jlfaaborg/google_ads_productivity_fullstack_ts"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Ads Productivity
                      </a>{" "}
                      - Used to bulk add conversions in Google Ads using Google
                      Ads API
                      <br />
                      <br />
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://github.com/Jlfaaborg/Analytics"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Analytics Productivity
                      </a>{" "}
                      - Used to bulk add users to Google Analytics Accounts.
                      Used Google Analytics API
                      <br />
                      <br />
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://github.com/Jlfaaborg/google-sheet-productivity"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Sheet Productivity
                      </a>{" "}
                      - Read data from one sheet, parsed, and organized data on
                      another sheet. Used Google Sheets API
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-evenly",
                    paddingBottom: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={handleChangePdf}
                    sx={{
                      display: { xs: "none", md: "inherit" },
                      flexBasis: "40%",
                      backgroundColor: "primary.main",
                      color: "secondary.main",
                    }}
                  >
                    Next Page
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      flexBasis: { xs: "100%", md: "40%" },
                      backgroundColor: "primary.main",
                      color: "secondary.main",
                    }}
                  >
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      href={resume}
                      download
                    >
                      Download Resume
                    </a>
                  </Button>
                </Box>
                <Box sx={{ display: { xs: "none", md: "inherit" } }}>
                  <Document file={{ url: resume }}>
                    <Page pageNumber={pageNumber} />
                  </Document>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Dialog>
      </Box>
    </Fade>
  );
}

export default Home;
