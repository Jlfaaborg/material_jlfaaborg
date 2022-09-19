import React, { useState } from "react";
import {
  Box,
  Typography,
  Backdrop,
  Modal,
  Fade,
  Link,
  IconButton,
} from "@mui/material";

import {
  Email,
  GitHub,
  LinkedIn,
  Call,
  ConnectWithoutContact,
} from "@mui/icons-material";

function Footer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        height: "10vh",
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "secondary.main",
      }}
    >
      <IconButton
        href="https://www.linkedin.com/in/jlfaaborg"
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn
          sx={{
            fontSize: "1.5em",
          }}
        />
      </IconButton>
      <IconButton
        size="large"
        href="https://github.com/Jlfaaborg"
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub
          sx={{
            fontSize: "1.5em",
          }}
        />
      </IconButton>
      <IconButton
        size="large"
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        <ConnectWithoutContact
          sx={{
            fontSize: "1.5em",
          }}
        />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade timeout={900} in={open}>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "70%",
              top: "50%",
              minHeight: "60vh",
              border: "2px solid #000",
              boxShadow: 24,
              backgroundColor: "primary.main",
              p: 4,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              fontSize: 50,
            }}
          >
            <Box
              sx={{
                flexGrow: "1",
                textAlign: "center",
              }}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                }}
                href="tel:6189789649"
                color="primary.main"
              >
                <Call fontSize="inherit" color="secondary" />
                <Typography variant="h5" color="secondary">
                  (618) 978-9649
                </Typography>
              </Link>
            </Box>
            <Box sx={{ flexGrow: "1", textAlign: "center" }}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                }}
                href="mailto:jlfaaborg@gmail.com"
                color="primary.main"
              >
                <Email fontSize="inherit" color="secondary" />
                <Typography variant="h5" color="secondary">
                  JLFaaborg@gmail.com
                </Typography>
              </Link>
            </Box>
            <Box sx={{ flexGrow: "1", textAlign: "center" }}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                }}
                href="https://www.linkedin.com/in/jlfaaborg"
                color="primary.main"
              >
                <LinkedIn fontSize="inherit" color="secondary" />
                <Typography variant="h5" color="secondary">
                  Connect On LinkedIn
                </Typography>
              </Link>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default Footer;
