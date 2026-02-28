

import { Box } from "@mui/material";
import HeroSection from "@/components/home/HeroSection";
import TechStackSection from "@/components/home/TechStackSection";
import BlogSection from "@/components/home/BlogSection";
import ProjectSection from "@/components/home/ProjectSection";
import { getRecentPosts } from "@/lib/blog";
import { getFeaturedProjects } from "@/lib/projects";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Abdul-Sobur Ibrahim's portfolio. Full-stack developer specializing in React, Next.js, and Python.",
  openGraph: {
    title: "Abdul-Sobur Ibrahim | Full-Stack Developer",
    description: "Welcome to my portfolio. Explore my projects and blog posts.",
    url: "https://abdul-sobur-portfolio.vercel.app",
  },
};


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
