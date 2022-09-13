import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Fade from "@mui/material/Fade";

function About() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        textAlign: "center",
        backgroundColor: "primary.main",
        marginTop: 0,
        minHeight: "fit-content",
        display: "flex",
        paddingX: "5%",
        paddingBottom: 10,
      }}
    >
      <Fade timeout={2500} in={true}>
        <Timeline sx={{ paddingBottom: "10%" }} position="alternate">
          <TimelineItem>
            <TimelineSeparator sx={{ display: { xs: "none", sm: "inherit" } }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card
                sx={{
                  backgroundColor: "secondary.main",
                  width: { xs: "65vw", sm: "inherit" },
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="primary"
                    gutterBottom
                  >
                    2018
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    component="div"
                  >
                    Graduation
                  </Typography>
                  <Typography color="primary" variant="body2">
                    Josh graduated with an A.S in Computer Science. Josh Studied
                    C# leading to .NET
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator sx={{ display: { xs: "none", sm: "inherit" } }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card
                sx={{
                  backgroundColor: "secondary.main",
                  width: { xs: "65vw", sm: "inherit" },
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="primary"
                    gutterBottom
                  >
                    01/2019 - 07/2019
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    component="div"
                  >
                    SEO Specialist | Progressive Dental Marketing
                  </Typography>
                  <Typography color="primary" variant="body2">
                    Created Internal Automation Tools That Work with Google
                    APIs.
                    <br />
                    Created Automated Sheets in Excel.
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator sx={{ display: { xs: "none", sm: "inherit" } }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card
                sx={{
                  backgroundColor: "secondary.main",
                  width: { xs: "65vw", sm: "inherit" },
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="primary"
                    gutterBottom
                  >
                    07/2019 - 01/2020
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    component="div"
                  >
                    Project Manager | The Click Depot | Contract
                  </Typography>
                  <Typography color="primary" variant="body2">
                    Maintained Contact with Clients Through the Whole Website
                    Development.
                    <br />
                    Set Up Call and Form Tracking Using Google Tag Manager and
                    Custom Triggers.
                    <br />
                    Created Automation Scrips in Google Ads.
                    <br />
                    Developed New Landing Pages Using Elementor.
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator sx={{ display: { xs: "none", sm: "inherit" } }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card
                sx={{
                  backgroundColor: "secondary.main",
                  width: { xs: "65vw", sm: "inherit" },
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="primary"
                    gutterBottom
                  >
                    03/2020 - 03/2021
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    component="div"
                  >
                    PPC Specialist | MyCity Social
                  </Typography>
                  <Typography color="primary" variant="body2">
                    A/B Tested Components to Drill Down on Best Performing
                    Combinations.
                    <br />
                    Created and Installed Google Tag Manager on Existing and New
                    Clients to Replace the GTAG Instances.
                    <br />
                    A/B Tested Components to Drill Down on Best Performing
                    Combinations.
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator sx={{ display: { xs: "none", sm: "inherit" } }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card
                sx={{
                  backgroundColor: "secondary.main",
                  width: { xs: "65vw", sm: "inherit" },
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="primary"
                    gutterBottom
                  >
                    03/2021 - 09/2021
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    component="div"
                  >
                    Salesforce Developer | Revature | Apprenticeship
                  </Typography>
                  <Typography color="primary" variant="body2">
                    Learned Salesforce Admin and Development.
                    <br />
                    Created Apex Triggers, Classes, and Test Classes.
                    <br />
                    Learned Test Driven Development in an Agile Environment,
                    Using Git.
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator sx={{ display: { xs: "none", sm: "inherit" } }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card
                sx={{
                  backgroundColor: "secondary.main",
                  width: { xs: "65vw", sm: "inherit" },
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="primary"
                    gutterBottom
                  >
                    09/2021 - 09/2022
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    component="div"
                  >
                    Paid Search Analytics | C-4 Analytics
                  </Typography>
                  <Typography color="primary" variant="body2">
                    Created Google Ads Conversion Tool Using React and Express.
                    <br />
                    Worked On Internal System Automation.
                    <br />
                    Set Up Advanced Conversion Funnels Through Google Tag
                    Manager and JavaScript.
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Fade>
    </Box>
  );
}

export default About;
