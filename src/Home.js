import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import me from "./me.jpg";
import googleAds from "./google_ads-official.svg";
import googleAnalytics from "./google_analytics-ar21.svg";
import html from "./html-5-logo-svgrepo-com.svg";
import js from "./js-svgrepo-com.svg";
import css from "./css-svgrepo-com.svg";
import gtm from "./google-tag-manager.svg";
import resume from "./josh_faaborg_web_developer.pdf";
import background from "./backgroundVideo.mp4";
import Slide from "@mui/material/Slide";
import Grow from "@mui/material/Grow";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Icon from "@mui/material/Icon";
import { Scale } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Home() {
  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

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
    <Box
      sx={{
        flexGrow: 1,
        textAlign: "center",
      }}
    >
      <Paper
        sx={{
          minHeight: "60vh",
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
        <Box sx={{ flexBasis: "50%" }}>
          <Typography variant="h3" component="div" color="primary" sx={{}}>
            Digital Marketer
          </Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexGrow: 1,
              fontSize: 80,
              justifyContent: "space-evenly",
              paddingTop: "5%",
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
        <Box sx={{ flexBasis: "50%", paddingTop: { xs: 5, md: 0 } }}>
          <Typography
            variant="h3"
            component="div"
            color="secondary"
            sx={{ flexGrow: 1 }}
          >
            Turned Web Developer
          </Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexGrow: 1,
              fontSize: 80,
              justifyContent: "space-evenly",
              paddingTop: "5%",
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
            {<KeyboardDoubleArrowUpIcon fontSize="inherit" color="primary" />}
          </Grow>
          <Grow
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...(true ? { timeout: 6000 } : {})}
          >
            {<KeyboardDoubleArrowUpIcon fontSize="inherit" color="primary" />}
          </Grow>
          <Grow
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...(true ? { timeout: 12000 } : {})}
          >
            {<KeyboardDoubleArrowUpIcon fontSize="inherit" color="primary" />}
          </Grow>
        </Box>
        <Button
          color="primary"
          variant="contained"
          sx={{ fontSize: "30px" }}
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
        transitionDuration={1100}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="secondary"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
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
          spacing={2}
          paddingX={4}
          sx={{
            backgroundColor: "secondary.main",
            height: "200vh",
            minHeight: "fit-content",
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                minWidth: "100%",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: { xs: "30vh", md: "60vh" },
                }}
                src={me}
              />
              <Accordion sx={{ textAlign: "left" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Education & Training</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    2018 - Josh graduated with an A.S. studying Computer
                    Science. During the time, Josh studied C# leading to .NET,
                    where he grew to love web development
                    <br />
                    <br />
                    2021 - Josh attended a bootcamp offered by Revature. During
                    this time, Josh learned Salesforce development and software
                    engineering topics ranging from: Git, Scrum/Agile, test
                    driven development
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ textAlign: "left" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Digital Marketing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    2019 - Josh graduated and looked for a web development job.
                    What he found was a job as an SEO Specialist. Josh learned
                    the basics of SEO to advanced technical SEO.
                    <br />
                    <br />
                    2020 - Josh continued his digital marketing journey when he
                    worked as a Project Manager. At that position, Josh was
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
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
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
                    - Used to bulk add users to Google Analytics Accounts. Used
                    Google Analytics API
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
                minWidth: "100%",
                maxHeight: "80vh",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 5,
                display: "flex",
              }}
            >
              <Box
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  display: { xs: "none", sm: "inherit" },
                }}
              >
                <Document
                  file={{ url: resume }}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} height="700" />
                </Document>
                <p style={{ width: "100%" }}>
                  Page {pageNumber} of {numPages}
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  columnGap: "20px",
                }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleChangePdf}
                  sx={{
                    paddingX: "10%",
                    display: { xs: "none", md: "inherit" },
                  }}
                >
                  More
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{ paddingX: "10%" }}
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
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </Box>
  );
}

export default Home;
