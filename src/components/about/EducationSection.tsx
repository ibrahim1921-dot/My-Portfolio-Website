"use client";

import { Box, Container, Typography, Stack, Paper, Grid } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

interface Certification {
  title: string;
  issuer: string;
  year: string;
}

const education: Education[] = [
  {
    degree: "BSc. Computer Science",
    institution: "Kwame Nkrumah University of Science and Technology (KNUST)",
    period: "2025 - 2028",
    description:
      "Currently pursuing a degree with a strong academic focus on skills building in areas such as software engineering principles and efficient data structures. Beyond core coursework, I serve as a lead developer for collaborative group projects and actively represent in hackathons.",
  },
];

const certifications: Certification[] = [
  {
    title: "Frontend Web Development",
    issuer: "ZapTek",
    year: "2025",
  }
];

export default function EducationSection() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: 8,
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Education */}
          <Grid sx={{ xs: 12, md: 6 }}>
            <Stack spacing={4}>
              <Stack spacing={1}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.75rem", md: "2.25rem" },
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "text.primary",
                  }}
                >
                  Education
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  My academic background
                </Typography>
              </Stack>

              {education.map((edu, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: 1,
                    borderColor: "divider",
                  }}
                >
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          bgcolor: "primary.main",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          flexShrink: 0,
                        }}
                      >
                        <SchoolIcon />
                      </Box>
                      <Stack spacing={0.5} flex={1}>
                        <Typography variant="h6" fontWeight={700}>
                          {edu.degree}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          fontWeight={600}
                        >
                          {edu.institution}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {edu.period}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {edu.description}
                    </Typography>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Grid>

          {/* Certifications */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={4}>
              <Stack spacing={1}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.75rem", md: "2.25rem" },
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "text.primary",
                  }}
                >
                  Certifications
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Professional certifications & courses
                </Typography>
              </Stack>

              <Stack spacing={2}>
                {certifications.map((cert, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      border: 1,
                      borderColor: "divider",
                      transition: "all 0.3s",
                      "&:hover": {
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          bgcolor: "action.hover",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "primary.main",
                          flexShrink: 0,
                        }}
                      >
                        <EmojiEventsIcon />
                      </Box>
                      <Stack flex={1}>
                        <Typography variant="body1" fontWeight={700}>
                          {cert.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {cert.issuer} • {cert.year}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
