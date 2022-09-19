import React, { useState } from "react";
import axios from "axios";

import { Box, Typography, Button, TextField, Fade } from "@mui/material";

function Contact() {
  const [allValues, setAllValues] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState(null);

  const API_PATH = "https://jlfaaborg.com/api/index.php";

  const handleChange = function (e) {
    setAllValues({ ...allValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    axios({
      method: "post",
      url: API_PATH,
      headers: { "content-type": "application/json" },
      data: allValues,
    })
      .then((result) => {
        setMailSent(result.data.sent);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <Fade timeout={2500} in={true}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          minHeight: "80vh",
          flexGrow: 1,
          textAlign: "center",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          color={"secondary"}
          sx={{ paddingY: 3 }}
          variant="h3"
          component="div"
        >
          Contact
        </Typography>
        <Box
          sx={{
            backgroundColor: "secondary.main",
            flexGrow: 1,
            paddingBottom: 20,
          }}
        >
          <form>
            <TextField
              label="First Name"
              id="fname"
              fullWidth
              autoComplete="none"
              onChange={handleChange}
            />
            <TextField
              label="Last Name"
              id="lname"
              fullWidth
              autoComplete="none"
              onChange={handleChange}
            />
            <TextField
              label="Email"
              id="lname"
              fullWidth
              autoComplete="none"
              onChange={handleChange}
            />
            <TextField
              label="Message"
              id="message"
              fullWidth
              multiline
              rows={5}
              autoComplete="none"
              onChange={handleChange}
            />
            <Button
              color="primary"
              size="large"
              variant="contained"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Fade>
  );
}

export default Contact;
