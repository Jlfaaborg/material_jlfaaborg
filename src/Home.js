import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import me from "./me.jpg";
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
          backgroundColor: "secondary.main",
          alignItems: "center",
          justifyContent: "center",
        }}
        elevation={12}
      >
        <video autoPlay loop muted style={{ position: "fixed", zIndex: -100 }}>
          <source src={background} type="video/mp4" />
        </video>
        <Box sx={{ flexBasis: "50%" }}>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Digital Marketer
          </Typography>
          <Box component="div" sx={{}}>
            hi
          </Box>
        </Box>
        <Box sx={{ flexBasis: "50%" }}>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Turned Web Developer
          </Typography>
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
        <Box sx={{}}>
          <Grow in={true}>
            {<KeyboardDoubleArrowUpIcon fontSize="large" color="primary" />}
          </Grow>
          <Grow
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...(true ? { timeout: 1000 } : {})}
          >
            {<KeyboardDoubleArrowUpIcon fontSize="large" color="primary" />}
          </Grow>
          <Grow
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...(true ? { timeout: 2000 } : {})}
          >
            {<KeyboardDoubleArrowUpIcon fontSize="large" color="primary" />}
          </Grow>
        </Box>
        <Button
          color="primary"
          variant="contained"
          size="large"
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
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={8} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                minWidth: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Document
                file={{ url: resume }}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
              <Button
                color="primary"
                variant="contained"
                onClick={handleChangePdf}
              >
                More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </Box>
  );
}

export default Home;
