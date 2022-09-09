import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        textAlign: "center",
      }}
    >
      <Paper
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "horizontal",
          background: "linear-gradient(to right bottom, #f1dac4, #607d8b)",
        }}
        elevation={12}
      >
        <Box sx={{ flexBasis: "50%" }}>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Digital Marketer
          </Typography>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src="/me.jpg"
          />
        </Box>
        <Box sx={{ flexBasis: "50%" }}>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Turned Web Developer
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Home;
