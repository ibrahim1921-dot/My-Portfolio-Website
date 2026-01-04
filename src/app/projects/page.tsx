import { Box } from "@mui/material";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { getAllProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects | Abdul-Sobur Ibrahim",
  description:
    "Browse my portfolio of web development projects built with modern technologies.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
    </Box>
  );
}
