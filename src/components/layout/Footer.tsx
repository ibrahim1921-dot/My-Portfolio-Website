"use client";

import * as React from "react";
import Link from "next/link";
import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      url: "https://github.com/ibrahim1921-dot",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon />,
      url: "https://twitter.com/CodeWithIbra1",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      url: "https://linkedin.com/in/abdul-soburibrahim",
    },
    {
        name: "WhatsApp",
        icon: <WhatsAppIcon />,
        url: "https://wa.me/+233507721958",
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        mt: "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          {/* Logo and Name */}
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: 1,
                bgcolor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <CodeIcon sx={{ fontSize: 14 }} />
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 700,
                color: "text.primary",
              }}
            >
              Abdul-Sobur Ibrahim
            </Typography>
          </Stack>

          {/* Social Links */}
          <Stack direction="row" spacing={2}>
            {socialLinks.map((link) => (
              <IconButton
                key={link.name}
                component={Link}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>

        {/* Copyright */}
        <Typography
          variant="body2"
          align="center"
          sx={{
            mt: 4,
            color: "text.secondary",
          }}
        >
          © {new Date().getFullYear()} Abdul-Sobur Ibrahim. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
