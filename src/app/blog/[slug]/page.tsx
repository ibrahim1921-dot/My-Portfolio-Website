import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Container, Typography, Box, Chip, Stack } from "@mui/material";
import { remark } from "remark";
import html from "remark-html";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(post.content || "");
  const contentHtml = processedContent.toString();

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Stack spacing={4}>
        {/* Blog Header */}
        <Box>
          <Chip label={post.category} sx={{ mb: 2 }} />
          <Typography variant="h3" sx={{ mb: 3 }}>
            {post.title}
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2" color="text.secondary">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                bgcolor: "text.secondary",
              }}
            />
            <Typography variant="body2" color="text.secondary">
              {post.readTime}
            </Typography>
          </Stack>
        </Box>

        {/* Featured Image */}
        <Box
          sx={{
            width: "100%",
            height: 400,
            borderRadius: 2,
            overflow: "hidden",
            backgroundImage: `url(${post.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Blog Content */}
        <Box
          sx={{
            "& h2": { mt: 4, mb: 2 },
            "& h3": { mt: 3, mb: 1.5 },
            "& p": { mb: 2, lineHeight: 1.8 },
            "& pre": {
              backgroundColor: "grey.100",
              p: 2,
              borderRadius: 1,
              overflowX: "auto",
              mb: 3,
            },
            "& code": {
              backgroundColor: "grey.100",
              px: 0.5,
              borderRadius: 0.5,
              fontFamily: "monospace",
            },
          }}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {post.tags.map((tag) => (
              <Chip key={tag} label={tag} variant="outlined" size="small" />
            ))}
          </Stack>
        )}
      </Stack>
    </Container>
  );
}
