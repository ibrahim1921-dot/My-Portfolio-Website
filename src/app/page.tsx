

import { Box } from "@mui/material";
import HeroSection from "@/components/home/HeroSection";
import TechStackSection from "@/components/home/TechStackSection";
import BlogSection from "@/components/home/BlogSection";
import ProjectSection from "@/components/home/ProjectSection";
import { getRecentPosts } from "@/lib/blog";
import { getFeaturedProjects } from "@/lib/projects";


export default async function Home() {
  const recentPosts = await getRecentPosts(3);
  const featuredProjects = getFeaturedProjects();
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <HeroSection />
      <TechStackSection />
      <BlogSection recentPosts={recentPosts} />
      <ProjectSection featuredProjects={featuredProjects} />
    </Box>
  );
}
