'use client'

import ProjectCard from "@/components/projects/ProjectCard";

import {
    Box,
    Container,
    Grid,
    Stack,
    Button
} from "@mui/material";

import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Project } from "@/types/project";

export default function ProjectSection({ featuredProjects }: { featuredProjects: Project[] }) {

    return (
        <Box component="section" sx={{ width: "100%", py: 8, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Stack spacing={4}>
                    {/* Header */}
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box
                            component="h2"
                            sx={{
                                fontSize: { xs: "1.5rem", md: "1.875rem" },
                                fontWeight: 700,
                                letterSpacing: "-0.02em",
                                color: "text.primary",
                                margin: 0
                            }}
                        >
                            Featured Projects
                        </Box>
                        <Button
                            component={Link}
                            href="/projects"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                display: { xs: "none", sm: "flex" },
                                fontWeight: 700,
                                textTransform: "none",
                            }}
                        >
                            View all projects
                        </Button>
                    </Stack>

                    {/* Projects Grid */}
                    <Grid container spacing={3}>
                        {featuredProjects.map((project) => (
                            <Grid size={{xs: 12, sm: 6, md: 4}} key={project.slug}>
                                <ProjectCard project={project} />
                            </Grid>
                        ))}
                    </Grid>

                    {/* Mobile View All Button*/}
                    <Box sx={{ display: { xs: "flex", sm: "none" }, justifyContent: "center" }}>
                        <Button
                            component={Link}
                            href="/projects"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                fontWeight: 700,
                                textTransform: "none",
                            }}
                        >
                            View all projects
                        </Button>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}