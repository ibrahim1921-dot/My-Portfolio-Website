"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import SearchOffIcon from "@mui/icons-material/SearchOff";

export default function NotFound() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
      }}
    >
      <Container maxWidth="sm">
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Icon */}
          <Box
            sx={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              bgcolor: "primary.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              animation: "pulse 2s ease-in-out infinite",
              "@keyframes pulse": {
                "0%, 100%": {
                  opacity: 1,
                  transform: "scale(1)",
                },
                "50%": {
                  opacity: 0.8,
                  transform: "scale(1.05)",
                },
              },
            }}
          >
            <SearchOffIcon sx={{ fontSize: 60 }} />
          </Box>

          {/* 404 Text */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "4rem", md: "6rem" },
              fontWeight: 900,
              background: "linear-gradient(135deg,#dc004e 0%,#dc005e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
            }}
          >
            404
          </Typography>

          {/* Message */}
          <Stack spacing={2}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Page Not Found
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: "400px",
                fontSize: { xs: "1rem", md: "1.125rem" },
              }}
            >
              Oops! The page you&apos;re looking for doesn&apos;t exist. It
              might have been moved or deleted.
            </Typography>
          </Stack>

          {/* Action Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Link href="/">
              <Button
                variant="contained"
                size="large"
                startIcon={<HomeIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: 2,
                }}
              >
                Back to Home
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: 2,
                }}
              >
                View Blog
              </Button>
            </Link>
          </Stack>

          {/* Additional Help Text */}
          <Typography variant="caption" color="text.secondary" sx={{ mt: 4 }}>
            If you believe this is an error, please{" "}
            <Link
              href="/contact"
              style={{
                color: "inherit",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              contact me
            </Link>
            .
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
