import type { BlogPost } from "@/types/blog";
import BlogCard from "./BlogCard";
import { Grid } from "@mui/material";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
        <Grid size={{xs: 12, md: 6, lg: 4}} key={post.slug}>
          <BlogCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
