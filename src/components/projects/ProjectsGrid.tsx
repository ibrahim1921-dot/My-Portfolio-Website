"use client";

import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/types/project";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  // Filter projects by category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (
    event: React.MouseEvent<HTMLElement>,
    newCategory: string | null
  ) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  return (
    <Box component="section" sx={{ width: "100%", py: 8 }}>
      <Container maxWidth="lg">
        <Stack spacing={5}>
          {/* Filter Buttons */}
          <Stack direction="row" justifyContent="center">
            <ToggleButtonGroup
              value={selectedCategory}
              exclusive
              onChange={handleCategoryChange}
              sx={{
                flexWrap: "wrap",
                gap: 1,
                "& .MuiToggleButton-root": {
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: 2,
                  px: 3,
                  border: 1,
                  borderColor: "divider",
                  "&.Mui-selected": {
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  },
                },
              }}
            >
              {categories.map((category) => (
                <ToggleButton key={category} value={category}>
                  {category}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Stack>

          {/* Projects Count */}
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </Typography>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <Grid container spacing={3}>
              {filteredProjects.map((project) => (
                <Grid size={{xs: 12, sm: 6, lg: 4}} key={project.id}>
                  <ProjectCard project={project} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                No projects found in this category
              </Typography>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
