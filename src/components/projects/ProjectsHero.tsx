"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

export default function ProjectsHero() {
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
            <CodeIcon sx={{ fontSize: 40 }} />
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
            My Projects
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
            A collection of projects I&apos;ve built using modern web
            technologies. From full-stack applications to frontend experiments,
            each project represents a learning journey and problem-solving
            experience.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
