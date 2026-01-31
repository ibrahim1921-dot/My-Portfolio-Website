"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Chip,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        border: 1,
        borderColor: "divider",
        transition: "all 0.3s",
        "&:hover": {
          borderColor: "primary.main",
          boxShadow: 4,
          "& .project-image": {
            transform: "scale(1.05)",
          },
        },
      }}
      elevation={0}
    >
      {/* Project Image */}
      <Link
        href={`/projects/${project.slug}`}
        style={{ textDecoration: "none" }}
      >
        <Box
          sx={{
            overflow: "hidden",
            aspectRatio: "16/9",
            position: "relative",
            cursor: "pointer",
          }}
        >
          {project.featured && (
            <Chip
              label="Featured"
              color="primary"
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 1,
                fontWeight: 700,
              }}
            />
          )}
          <CardMedia
            className="project-image"
            component="div"
            sx={{
              height: "100%",
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform 0.5s ease-in-out",
            }}
          />
        </Box>
      </Link>

      {/* Card Content */}
      <CardContent
        sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column", gap: 2 }}
      >
        {/* Category */}
        <Chip
          label={project.category}
          size="small"
          sx={{
            width: "fit-content",
            fontSize: "0.75rem",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        />

        {/* Title */}
        <Link
          href={`/projects/${project.slug}`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "text.primary",
              cursor: "pointer",
              transition: "color 0.3s",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            {project.title}
          </Typography>
        </Link>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            fontSize: "0.875rem",
            lineHeight: 1.6,
          }}
        >
          {project.excerpt}
        </Typography>

        {/* Technologies */}
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          sx={{ gap: 1, mt: "auto" }}
        >
          {project.technologies.slice(0, 4).map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                fontSize: "0.7rem",
                height: 24,
              }}
            />
          ))}
          {project.technologies.length > 4 && (
            <Chip
              label={`+${project.technologies.length - 4}`}
              size="small"
              variant="outlined"
              sx={{
                fontSize: "0.7rem",
                height: 24,
              }}
            />
          )}
        </Stack>

        {/* Action Buttons */}
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Button
            component={Link}
            href={`/projects/${project.slug}`}
            variant="outlined"
            size="small"
            endIcon={<ArrowForwardIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              flex: 1,
            }}
          >
            View Details
          </Button>
          {/* {project.liveUrl && (
            <Button
              component={Link}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="small"
              startIcon={<LaunchIcon />}
              sx={{
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Live
            </Button>
          )} */}
        </Stack>
      </CardContent>
    </Card>
  );
}
