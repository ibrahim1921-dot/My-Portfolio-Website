"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  LinearProgress,
  Paper,
  Grid,
} from "@mui/material";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "React/Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 75, category: "Frontend" },
  { name: "Material-UI", level: 80, category: "Frontend" },
  { name: "Node.js/Express", level: 82, category: "Backend" },
  { name: "PostgreSQL/MongoDB", level: 75, category: "Backend" },
  { name: "Git/GitHub", level: 90, category: "Tools" },
];

export default function SkillsSection() {
  const categories = ["Frontend", "Backend", "Tools"];

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
              Technologies I work with regularly and my proficiency level
            </Typography>
          </Stack>

          {/* Skills by Category */}
          <Grid container spacing={4}>
            {categories.map((category) => (
              <Grid size={{xs: 12, md: 4}} key={category}>
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
                  <Stack spacing={3}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "primary.main",
                        mb: 1,
                      }}
                    >
                      {category}
                    </Typography>

                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill) => (
                        <Stack key={skill.name} spacing={1}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Typography variant="body2" fontWeight={600}>
                              {skill.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                              fontWeight={700}
                            >
                              {skill.level}%
                            </Typography>
                          </Stack>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 8,
                              borderRadius: 1,
                              bgcolor: "action.hover",
                              "& .MuiLinearProgress-bar": {
                                borderRadius: 1,
                              },
                            }}
                          />
                        </Stack>
                      ))}
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
