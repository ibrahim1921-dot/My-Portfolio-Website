import { getAllBlogPosts } from "@/lib/blog";
import { Container, Typography } from "@mui/material";
import BlogList from "@/components/blog/BlogList";
export default async function BlogPage() {
  const allPosts = await getAllBlogPosts();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h1" sx={{ mb: 2 }}>
        Blog
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6 }}>
        Thoughts, tutorials, and insights about web development
      </Typography>

      <BlogList posts={allPosts} />
    </Container>
  );
}
