"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Grid,
  Chip,
} from "@mui/material";

interface Category {
  label: string;
  skills: string[];
}

const categories: Category[] = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Material-UI", "CSS3", "Vite"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    label: "Tools & Mobile",
    skills: ["Git", "GitHub", "React Native", "Expo", "Vercel", "VS Code"],
  },
];

export default function SkillsSection() {
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
              Skills & Technologies
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Technologies I work with regularly
            </Typography>
          </Stack>

          {/* Skills by Category */}
          <Grid container spacing={4}>
            {categories.map((category) => (
              <Grid size={{ xs: 12, md: 4 }} key={category.label}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: 1,
                    borderColor: "divider",
                    height: "100%",
                  }}
                >
                  <Stack spacing={2.5}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "primary.main",
                      }}
                    >
                      {category.label}
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {category.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            fontWeight: 500,
                            borderRadius: 1.5,
                            bgcolor: "action.hover",
                            color: "text.primary",
                            border: 1,
                            borderColor: "divider",
                            "&:hover": {
                              bgcolor: "primary.main",
                              color: "primary.contrastText",
                              borderColor: "primary.main",
                            },
                            transition: "all 0.2s ease",
                          }}
                        />
                      ))}
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
