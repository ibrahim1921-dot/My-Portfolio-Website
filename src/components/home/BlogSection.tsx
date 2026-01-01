"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Chip,
  Button,
} from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const blogPosts = [
  {
    id: 1,
    category: "Development",
    readTime: "5 min read",
    title: "Mastering State Management in 2024",
    excerpt:
      "Exploring the newest patterns in React state management, from Context API improvements to the rise of signals.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ-2e7_CYbnmUmI0FRFleBjQS3sWJmfzKcR4Kp9edXznVY7rdNEVVU6M810vTBwhiq3CtCdgunarSyYxdPntswtj3X0PYMmWpRyEM4y8jCKCa5i8La9SzEV3QYVy_vi2rE7FTFZBBsO9xq-MSUZaSFKBzpD6kdZVjyNQc6JM7hHHnKJKbg4O3M3KEum-tNUf9HoyZ26y1Jh9QMwWY6PjuSJL1mPYqKvD4mtaRCufLe-O_ro3LB3sXHtvcMRRtkCDGV2EEdB15Ypbbh",
    slug: "mastering-state-management-2025",
  },
  {
    id: 2,
    category: "Lifestyle",
    readTime: "3 min read",
    title: "Optimizing Your Developer Workspace",
    excerpt:
      "How environment design affects productivity and code quality. A look into my personal setup.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDp02dspkTcdACOPawcTuD0OIwRevXY3yqSbJXsrLSTy-b_RH9C-s0tmEsNf4FjqKXkUykTKl8hbDAZ97ebsazNybRxt8_-OUK_pC9G1XhG6jKGRLxYdfANfxnCmJpRri7UdDOJBeT-SXLlTFkctQRCXtH4OZnKJAVCk9SM8wJR0woWctFc5KrdQW92Z_aEM5PfIg4JsTzmfnwU7kS3fgRPqDKOi3SJWFrYNuVwS4Taz5tDAfoXVv4XxmdVjY9Ye1wcr2RZ-v46MCv9",
    slug: "optimizing-developer-workspace",
  },
  {
    id: 3,
    category: "AI & ML",
    readTime: "8 min read",
    title: "The Python Advantage in AI",
    excerpt:
      "Why Python continues to dominate the artificial intelligence landscape despite new competitors.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCITi2Wk_rcb0hXi1CBM5Nux2ATOGt6z362ZW6IM6v2WhTlK4e_RCh22h6CNcGb28VFQTRZTfDY0ZsDNcwxT8ucuQ1WwlrMzBDVEYKVMkClOEkj9VCdeKM8eN_tSoB_29amGgOB7orB9kzbb7TnFo4g95zmg-Q17TAFxQAzSF8kv5klBreinEP7m0rw-w7ggUIkjFeoxgt0YR-MmneKAr4M8K3sgQ1TNmRw342TN4MV97clLKPT6nD4dd761Y9cK0rOpJaeb4-7b1pU",
    slug: "python-advantage-in-ai",
  },
];

export default function BlogSection() {
  return (
    <Box component="section" sx={{ width: "100%", py: 8 }}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* Header */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", md: "1.875rem" },
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "text.primary",
              }}
            >
              Recent Blog Posts
            </Typography>
            <Button
              component={Link}
              href="/blog"
              endIcon={<ArrowForwardIcon />}
              sx={{
                display: { xs: "none", sm: "flex" },
                fontWeight: 700,
                textTransform: "none",
              }}
            >
              View all posts
            </Button>
          </Stack>

          {/* Blog Cards Grid */}
          <Grid container spacing={3}>
            {blogPosts.map((post) => (
              <Grid size={{xs:12, md:6, lg: 4}} key={post.id}>
                <Card
                  component={Link}
                  href={`/blog/${post.slug}`}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    border: 1,
                    borderColor: "divider",
                    textDecoration: "none",
                    transition: "all 0.3s",
                    "&:hover": {
                      borderColor: "primary.main",
                      boxShadow: 4,
                      "& .blog-image": {
                        transform: "scale(1.05)",
                      },
                      "& .blog-title": {
                        color: "primary.main",
                      },
                    },
                  }}
                  elevation={0}
                >
                  <Box sx={{ overflow: "hidden", aspectRatio: "16/9" }}>
                    <CardMedia
                      className="blog-image"
                      component="div"
                      sx={{
                        height: "100%",
                        backgroundImage: `url(${post.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.5s ease-in-out",
                      }}
                    />
                  </Box>

                  <CardContent
                    sx={{
                      p: 2.5,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Chip
                        label={post.category}
                        size="small"
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          height: 24,
                        }}
                      />
                      <Box
                        sx={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          bgcolor: "text.secondary",
                        }}
                      />
                      <Typography
                        variant="caption"
                        fontWeight={700}
                        textTransform="uppercase"
                      >
                        {post.readTime}
                      </Typography>
                    </Stack>

                    <Typography
                      className="blog-title"
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.25rem",
                        color: "text.primary",
                        transition: "color 0.3s",
                      }}
                    >
                      {post.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        fontSize: "0.875rem",
                      }}
                    >
                      {post.excerpt}
                    </Typography>

                    <Button
                      endIcon={<ArrowOutwardIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        mt: "auto",
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        textTransform: "none",
                        justifyContent: "flex-start",
                        p: 0,
                        minWidth: "auto",
                      }}
                    >
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Mobile View All Button */}
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Button
              component={Link}
              href="/blog"
              endIcon={<ArrowForwardIcon />}
              sx={{ fontWeight: 700, textTransform: "none" }}
            >
              View all posts
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
