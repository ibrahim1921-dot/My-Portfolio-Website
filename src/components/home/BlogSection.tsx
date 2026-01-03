'use client'

import BlogCard from "@/components/blog/BlogCard";


import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Button,
} from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BlogPost } from "@/types/blog";


export default function BlogSection({recentPosts}: {recentPosts: BlogPost[]}) {

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
            {recentPosts.map((post) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={post.slug}>
                <BlogCard post={post} />
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
