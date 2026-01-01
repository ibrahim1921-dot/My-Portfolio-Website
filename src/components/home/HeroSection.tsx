"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 6, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column-reverse", lg: "row" }}
          spacing={{ xs: 6, lg: 12 }}
          alignItems="center"
        >
          {/* Text Content */}
          <Stack spacing={3} sx={{ flex: 1, alignItems: "flex-start" }}>
            <Stack spacing={2}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.25rem", md: "3rem", lg: "3.75rem" },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "text.primary",
                }}
              >
                Building the Future with Code
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.125rem", md: "1.25rem" },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "text.secondary",
                  maxWidth: "600px",
                }}
              >
                I&apos;m Abdul-Sobur Ibrahim, a full-stack developer working with
                JavaScript frameworks and Python, documenting my journey and
                constantly learning through real-world projects.
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mt: 1 }}>
              <Button
                component={Link}
                href="/projects"
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: 2,
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                View Projects
              </Button>
              <Button
                component={Link}
                href="/blog"
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: 2,
                  borderWidth: 1,
                }}
              >
                Read Blog
              </Button>
            </Stack>
          </Stack>

          {/* Hero Image */}
          <Box sx={{ flex: 1, width: "100%" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: { xs: "16/9", lg: "1/1" },
                maxHeight: "500px",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(55, 19, 236, 0.2)",
                "&:hover .hero-image": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top right, rgba(55, 19, 236, 0.4), transparent)",
                  mixBlendMode: "overlay",
                  zIndex: 1,
                }}
              />
              <Box
                className="hero-image"
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfcWg_KjL5hAZ-RbXE1oaKxrP6zC5_9aR_hOs-PmXxQioA4eo0U6l3ekDJBCIf0TDYZTkwJXsjNjDbASQwni3R9_jkGJH7yUdqwrjjtAkGJFIMTpXc4WaFYTgmMIlfRe2GD7F0GVn3uDXQncrAflWSW6Ud09y30TGVLKI214t1RGszmyNhe7SOE3Dubg3g6XzSE-eaAm84zsjpcI5mUOYKiLHcccACcs3noNpxuPpOO3kdKO6rGEKcxhH6xpNAC2c407xydYFhesIg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.7s ease-in-out",
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
