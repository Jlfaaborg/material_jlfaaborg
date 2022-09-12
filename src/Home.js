import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import me from "./me.jpg";
import resume from "./josh_faaborg_web_developer.pdf";
import background from "./background.jpg";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

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
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
        elevation={12}
      >
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
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
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
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Hello
            </Typography>
          </Toolbar>
        </AppBar>
        <Box>
          <Document
            file={{ url: resume }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </Box>
      </Dialog>
    </Box>
  );
}

export default Home;
