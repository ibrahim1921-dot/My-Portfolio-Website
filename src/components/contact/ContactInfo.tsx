"use client";

import { Box, Paper, Stack, Typography, IconButton } from "@mui/material";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface ContactItem {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

const contactDetails: ContactItem[] = [
  {
    icon: <EmailIcon />,
    title: "Email",
    value: "abdulsobur1921@gmail.com",
    href: "mailto:abdulsobur1921@gmail.com",
  },
  {
    icon: <LocationOnIcon />,
    title: "Location",
    value: "Kumasi, Ghana",
  },
];

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: <GitHubIcon />,
    url: "https://github.com/ibrahim1921-dot",
    color: "#333333",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    url: "https://linkedin.com/in/abdul-sobur-ibrahim-342aa634a",
    color: "#0A66C2",
  },
  {
    name: "Twitter",
    icon: <TwitterIcon />,
    url: "https://twitter.com/CodeWithIbra1",
    color: "#1DA1F2",
  },
];

export default function ContactInfo() {
  return (
    <Stack spacing={3}>
      {/* Contact Details */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          border: 1,
          borderColor: "divider",
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h5" fontWeight={700}>
            Contact Information
          </Typography>

          {contactDetails.map((detail, index) => (
            <Box key={index}>
              {detail.href ? (
                <Link
                  href={detail.href}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{
                      transition: "all 0.3s",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: "primary.main",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      {detail.icon}
                    </Box>
                    <Stack>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        {detail.title}
                      </Typography>
                      <Typography variant="body1" fontWeight={600}>
                        {detail.value}
                      </Typography>
                    </Stack>
                  </Stack>
                </Link>
              ) : (
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: "action.hover",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "primary.main",
                      flexShrink: 0,
                    }}
                  >
                    {detail.icon}
                  </Box>
                  <Stack>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight={600}
                    >
                      {detail.title}
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      {detail.value}
                    </Typography>
                  </Stack>
                </Stack>
              )}
            </Box>
          ))}
        </Stack>
      </Paper>

      {/* Social Links */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          border: 1,
          borderColor: "divider",
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h5" fontWeight={700}>
            Follow Me
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Connect with me on social media for updates and more content.
          </Typography>

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
                  width: 48,
                  height: 48,
                  border: 1,
                  borderColor: "divider",
                  transition: "all 0.3s",
                  "&:hover": {
                    borderColor: link.color,
                    bgcolor: link.color,
                    color: "white",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Paper>

      {/* Availability */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          border: 1,
          borderColor: "divider",
          bgcolor: "primary.main",
          color: "white",
        }}
      >
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: "#4ade80",
              animation: "pulse 2s ease-in-out infinite",
              "@keyframes pulse": {
                "0%, 100%": {
                  opacity: 1,
                },
                "50%": {
                  opacity: 0.5,
                },
              },
            }}
          />
          <Typography variant="h6" fontWeight={700}>
            Available for Work
          </Typography>
          <Typography variant="body2">
            I&apos;m currently available for freelance projects and full-time
            opportunities.
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
}
