"use client";

import { Box, Container, Typography, Stack, Avatar, Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";

export default function AboutHero() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Avatar */}
          <Avatar
            src="/profile.jpg"
            alt="Abdul-Sobur Ibrahim"
            sx={{
              width: { xs: 120, md: 150 },
              height: { xs: 120, md: 150 },
              border: 4,
              borderColor: "primary.main",
              boxShadow: "0 10px 40px rgba(55, 19, 236, 0.3)",
            }}
          />

          {/* Name & Title */}
          <Stack spacing={1.5}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "text.primary",
              }}
            >
              Abdul-Sobur Ibrahim
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.125rem", md: "1.5rem" },
                fontWeight: 500,
                color: "primary.main",
              }}
            >
              Full-Stack Developer & Tech Enthusiast
            </Typography>
          </Stack>

          {/* Quick Info Chips */}
          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            justifyContent="center"
          >
            <Chip
              icon={<LocationOnIcon />}
              label="Kumasi, Ghana"
              sx={{
                fontWeight: 600,
                bgcolor: "background.paper",
                border: 1,
                borderColor: "divider",
              }}
            />
            <Chip
              icon={<WorkIcon />}
              label="Available for Work"
              color="primary"
              sx={{ fontWeight: 600 }}
            />
            <Chip
              icon={<EmailIcon />}
              label="abdulsobur1921@gmail.com"
              sx={{
                fontWeight: 600,
                bgcolor: "background.paper",
                border: 1,
                borderColor: "divider",
              }}
            />
          </Stack>

          {/* Bio */}
          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.8,
              color: "text.secondary",
              mt: 2,
            }}
          >
            I&apos;m a passionate full-stack developer with a love for creating
            elegant solutions to complex problems. With expertise in modern web
            technologies and a keen eye for design, I build applications that
            are not only functional but also delightful to use. When I&apos;m
            not coding, you&apos;ll find me writing technical articles,
            exploring new technologies, or contributing to open-source projects.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
