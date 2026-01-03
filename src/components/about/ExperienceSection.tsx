

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
    title: "Full-Stack Developer",
    period: "Dec 2025 - present",
    description:
      "Built and maintained multiple client-facing applications. Implemented RESTful APIs and integrated third-party services. Reduced page load times by 60% through optimization techniques.",
    technologies: ["React","Next.js", "MongoDB", "Node.js", "Express"],
  },
  {
    title: "Junior Developer",
    period: "Feb 2025 - Sept 2025",
    description:
      "Developed responsive websites and web applications for various clients. Worked closely with designers to implement pixel-perfect UI components. Gained strong foundation in modern web development practices.",
    technologies: ["JavaScript", "HTML/CSS"],
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
