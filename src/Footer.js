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
          handleChange(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
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
          <Fade in={open}>
            <Box
              sx={{
                position: "fixed",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                minHeight: "80vh",
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Text in a modal
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Box>
  );
}

export default Footer;
