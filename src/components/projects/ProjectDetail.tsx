"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactMarkdown from "react-markdown";
import type { Project } from "@/types/project";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <Box component="article" sx={{ width: "100%", py: { xs: 4, md: 6 } }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          {/* Back Button */}
          <Button
            component={Link}
            href="/projects"
            startIcon={<ArrowBackIcon />}
            sx={{
              alignSelf: "flex-start",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Back to Projects
          </Button>

          {/* Project Header */}
          <Stack spacing={3}>
            {/* Category & Featured Badge */}
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip
                label={project.category}
                color="primary"
                sx={{
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                }}
              />
              {project.featured && (
                <Chip
                  label="Featured"
                  sx={{
                    fontWeight: 700,
                    bgcolor: "success.main",
                    color: "white",
                    fontSize: "0.75rem",
                  }}
                />
              )}
            </Stack>

            {/* Title */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "text.primary",
              }}
            >
              {project.title}
            </Typography>

            {/* Description */}
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.125rem", md: "1.25rem" },
                fontWeight: 400,
                color: "text.secondary",
                lineHeight: 1.6,
              }}
            >
              {project.description}
            </Typography>

            {/* Action Buttons */}
            <Stack direction="row" spacing={2} flexWrap="wrap">
              {project.githubUrl && (
                <Button
                  component={Link}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    px: 3,
                  }}
                >
                  View Code
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  component={Link}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  startIcon={<LaunchIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    px: 3,
                  }}
                >
                  Live Demo
                </Button>
              )}
            </Stack>
          </Stack>

          <Divider />

          {/* Project Image */}
          <Box
            sx={{
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Technologies */}
          <Stack spacing={2}>
            <Typography variant="h6" fontWeight={700}>
              Technologies Used
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
              {project.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  variant="outlined"
                  sx={{
                    fontWeight: 600,
                    borderWidth: 2,
                  }}
                />
              ))}
            </Stack>
          </Stack>

          <Divider />

          {/* Markdown Content */}
          <Box
            sx={{
              "& h1": {
                fontSize: "2rem",
                fontWeight: 700,
                mt: 4,
                mb: 2,
                color: "text.primary",
              },
              "& h2": {
                fontSize: "1.5rem",
                fontWeight: 700,
                mt: 3,
                mb: 2,
                color: "text.primary",
              },
              "& h3": {
                fontSize: "1.25rem",
                fontWeight: 600,
                mt: 2,
                mb: 1,
                color: "text.primary",
              },
              "& p": {
                fontSize: "1rem",
                lineHeight: 1.8,
                mb: 2,
                color: "text.secondary",
              },
              "& ul, & ol": {
                pl: 3,
                mb: 2,
                "& li": {
                  mb: 1,
                  color: "text.secondary",
                  lineHeight: 1.8,
                },
              },
              "& code": {
                bgcolor: "action.hover",
                px: 1,
                py: 0.5,
                borderRadius: 1,
                fontSize: "0.875rem",
                fontFamily: "monospace",
              },
              "& pre": {
                bgcolor: "action.hover",
                p: 2,
                borderRadius: 2,
                overflow: "auto",
                mb: 2,
                "& code": {
                  bgcolor: "transparent",
                  p: 0,
                },
              },
              "& a": {
                color: "primary.main",
                textDecoration: "underline",
                "&:hover": {
                  color: "primary.dark",
                },
              },
              "& img": {
                maxWidth: "100%",
                height: "auto",
                borderRadius: 2,
                my: 2,
              },
            }}
          >
            <ReactMarkdown>{project.content || ""}</ReactMarkdown>
          </Box>

          <Divider />

          {/* Bottom Navigation */}
          <Stack direction="row" justifyContent="center" sx={{ pt: 2 }}>
            <Button
              component={Link}
              href="/projects"
              variant="outlined"
              size="large"
              sx={{
                textTransform: "none",
                fontWeight: 700,
                px: 4,
              }}
            >
              View All Projects
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
