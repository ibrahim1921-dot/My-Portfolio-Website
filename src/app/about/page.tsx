import { Box } from "@mui/material";
import AboutHero from "@/components/about/AboutHero";
import SkillsSection from "@/components/about/SkillsSection";
import ExperienceSection from "@/components/about/ExperienceSection";
import EducationSection from "@/components/about/EducationSection";
export const metadata = {
  title: "About Me | Abdul-Sobur Ibrahim",
  description:
    "Learn more about my skills, experience, and journey as a full-stack developer.",
};

export default function AboutPage() {
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
      <AboutHero />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </Box>
  );
}
