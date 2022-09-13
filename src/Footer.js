import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";

function Footer() {
  const [open, setOpen] = React.useState(false);
  const [route, setRoute] = React.useState(0);

  let navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (route) => {
    console.log(route);
    if (route === 0) {
      navigate("/");
      setRoute(0);
    } else if (route === 1) {
      navigate("/about");
      setRoute(1);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
    >
      <BottomNavigation
        sx={{
          height: "10vh",
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "secondary.main",
        }}
        showLabels
        value={route}
        onChange={(event, newValue) => {
          handleChange(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          sx={{
            ":hover": "background-Color: blue",
          }}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction label="About" icon={<InfoIcon />} />
        <BottomNavigationAction
          label="Contact"
          icon={<ConnectWithoutContactIcon />}
          onClick={handleOpen}
        />
      </BottomNavigation>
      <Box>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade timeout={1500} in={open}>
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                top: "50%",
                minHeight: "80vh",
                border: "2px solid #000",
                boxShadow: 24,
                backgroundColor: "primary.main",
                p: 4,
                display: "flex",
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
                  <CallIcon fontSize="inherit" color="secondary" />
                  <Typography variant="h5" color="secondary">
                    Give Josh A Call
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
                  <EmailIcon fontSize="inherit" color="secondary" />
                  <Typography variant="h5" color="secondary">
                    Send Josh An Email
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
                  <LinkedInIcon fontSize="inherit" color="secondary" />
                  <Typography variant="h5" color="secondary">
                    Connect On LinkedIn
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Box>
  );
}

export default Footer;
