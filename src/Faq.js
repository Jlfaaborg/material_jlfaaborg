import React from "react";

import {
  Box,
  Typography,
  Fade,
  Accordion,
  AccordionDetails,
  Paper,
  AccordionSummary,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Masonry from "@mui/lab/Masonry";

import { styled } from "@mui/material/styles";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
}));

const content = [
  {
    question: "How long have you been in development?",
    answer:
      "While I have been building websites for 3 years, I have been coding since middle school, starting on a Ti-84 Graphing Calculator",
  },
  {
    question: "What technologies have you used?",
    answer:
      "Right now I am focusing on React and Nodejs technologies. I also have experience in WordPress using PHP.",
  },
  {
    question: "Where do you see yourself in 5 years?",
    answer:
      "In 5 years I want to be in a position that I can lead a team of developers and teach those who are in the position I am in now.",
  },
  {
    question: "What project are you most proud of?",
    answer:
      "My Google Ads Producitivity App. This app really got me back into development and gave me a problem with a solution that was reachable. I also enjoyed developming this site to be visually appeasing.",
  },
  {
    question: "Why JavaScript?",
    answer:
      "C# is too nice. I like js because of the difficulty. In Java or C#, if there is something wrong, the app wont compile. In JavaScript, the page will load and give you an unclear error message, all while laughing at your mistakes.",
  },
  {
    question: "What is a weakness you are overcoming?",
    answer:
      "Imposter syndrome. I am at the point where I know that I know how to create solutions, but I still have doubts that I am the worse developer in existance. I am overcoming this by continuing to improve my skills.",
  },
  {
    question: "What is an interesting fact about you?",
    answer:
      "I have a terrible history of crime due to hacking my middle school computer system to play Runescape. 30 hours of hard community service really got me away from that life.",
  },
];

function Faq() {
  return (
    <Fade timeout={2500} in={true}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          minHeight: "80vh",
          textAlign: "center",
        }}
      >
        <Box sx={{ padding: 5 }}>
          <Typography
            color={"secondary"}
            sx={{ paddingY: 3 }}
            variant="h3"
            component="div"
          >
            FAQ
          </Typography>
          <Masonry columns={2} spacing={5}>
            {content.map((content, index) => (
              <Paper key={index}>
                <StyledAccordion sx={{ minHeight: "fit-content" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Question: {content.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>Answer: {content.answer}</AccordionDetails>
                </StyledAccordion>
              </Paper>
            ))}
          </Masonry>
        </Box>
      </Box>
    </Fade>
  );
}

export default Faq;
