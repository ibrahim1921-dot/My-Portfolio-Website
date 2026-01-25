"use client";

import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import JavascriptIcon from "@mui/icons-material/Javascript";
import Image from "next/image";
const technologies = [
  {
    name: "React",
    icon: "/icons/react.svg",
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    icon: <JavascriptIcon sx={{ fontSize: 40 }} />,
    color: "#F7DF1E",
  },
  {
    name: "Python",
    icon: "/icons/python.svg",
    color: "#3776AB",
  },
  {
    name: "Next.js",
    icon: "/icons/next.svg",
    color: "#000000",
  },
  {
    name: "Material UI",
    icon: "/icons/mui.svg",
    color: "#38B2AC",
  },
  {
    name: "Node.js + Express",
    icon: "icons/node.svg",
    color: "#339933",
  },
];

export default function TechStackSection() {
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
        <Stack spacing={4}>
          <Stack spacing={1}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", md: "1.875rem" },
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "text.primary",
              }}
            >
              Technologies I work with
            </Typography>
            <Typography variant="body1" color="text.secondary">
              My preferred tools for building digital products.
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {technologies.map((tech, index) => (
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: 1,
                    borderColor: "divider",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.5,
                    cursor: "default",
                    transition: "all 0.3s",
                    "&:hover": {
                      borderColor: "primary.main",
                      "& .tech-icon": {
                        color: tech.color,
                      },
                    },
                  }}
                >
                 
                    <Box
                    sx={{
                      width: 60,
                      height: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      
                    }}
                  >
                    {typeof tech.icon === "string" ? (
                      <Image src={tech.icon}
                      alt={tech.name}
                      width={40}
                      height={40}
                      style={{objectFit: "contain"}} />
                    ) : (
                      tech.icon
                    )}
                  </Box>
                  <Typography variant="body2" fontWeight={700}>
                    {tech.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
