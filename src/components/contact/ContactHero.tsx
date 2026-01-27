"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactHero() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
       
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center" textAlign="center">
          {/* Icon */}
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              bgcolor: "primary.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <EmailIcon sx={{ fontSize: 40 }} />
          </Box>

          {/* Title */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "text.primary",
            }}
          >
            Get In Touch
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              maxWidth: "700px",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.8,
              color: "text.secondary",
            }}
          >
            Have a question or want to work together? I&apos;d love to hear from you.
            Fill out the form below or reach out through my social handles.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
