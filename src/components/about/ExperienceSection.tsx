

import { Box, Container, Typography, Stack, Paper, Chip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

interface Experience {
  title: string;
  company?: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Founder & Full-Stack Developer",
    company: "ITechnologies",
    period: "April 2026 - Present",
    description:
      "Founded and building software products for the Ghanaian market. Currently developing BundleHub, a live mobile data reseller platform supporting MTN, Telecel, and AirtelTigo, handling wallet pre-funding, provider routing, and background job processing for order delivery. Also building ScholarLink, an AI-powered scholarship matching platform for Ghanaian students, submitted to CodeQuest 2026.",
    technologies: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Next.js", "React Native", "BullMQ", "Paystack"],
  },
  {
    title: "Software Development Intern",
    company: "OpenLabs Ghana",
    period: "Sept 2025 - Dec 2025",
    description:
      "Led the frontend team in building a teaching assistant application, and occasionally taught students directly as part of the internship.",
    technologies: ["React", "MUI"],
  },
];

export default function ExperienceSection() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: 8,
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={5}>
          {/* Section Header */}
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
              Work Experience
            </Typography>
            <Typography variant="body1" color="text.secondary">
              My professional journey and key accomplishments
            </Typography>
          </Stack>

          {/* Experience Timeline */}
          <Stack spacing={3}>
            {experiences.map((exp, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  border: 1,
                  borderColor: "divider",
                  position: "relative",
                  transition: "all 0.3s",
                  "&:hover": {
                    borderColor: "primary.main",
                    boxShadow: 2,
                  },
                }}
              >
                <Stack spacing={2}>
                  {/* Header */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    spacing={1}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
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
                        }}
                      >
                        <WorkIcon />
                      </Box>
                      <Stack>
                        <Typography variant="h6" fontWeight={700}>
                          {exp.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          fontWeight={600}
                        >
                          {exp.company}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Chip
                      label={exp.period}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        bgcolor: "action.hover",
                      }}
                    />
                  </Stack>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {exp.description}
                  </Typography>

                  {/* Technologies */}
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    sx={{ gap: 1 }}
                  >
                    {exp.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          bgcolor: "background.default",
                          border: 1,
                          borderColor: "divider",
                        }}
                      />
                    ))}
                  </Stack>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
