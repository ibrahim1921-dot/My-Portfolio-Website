'use client';
import type { BlogPost } from "@/types/blog";

import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Chip,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
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
            fontSize: "0.875rend",
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
  );
}