"use client";

import { Box } from "@mui/material";
import HeroSection from "@/components/home/HeroSection";
import TechStackSection from "@/components/home/TechStackSection";
import BlogSection from "@/components/home/BlogSection";

export default function Home() {
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
      <BlogSection />
    </Box>
  );
}
