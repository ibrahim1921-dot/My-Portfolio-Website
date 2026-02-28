import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Container, Typography, Box, Chip, Stack } from "@mui/material";
import { remark } from "remark";
import html from "remark-html";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Abdul-Sobur Ibrahim" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Abdul-Sobur Ibrahim"],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://abdul-sobur-portfolio.vercel.app/blog/${slug}`,
    },
  };
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

  // Article structured data for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Abdul-Sobur Ibrahim",
      url: "https://abdul-sobur-portfolio.vercel.app",
    },
    publisher: {
      "@type": "Person",
      name: "Abdul-Sobur Ibrahim",
    },
    description: post.excerpt,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
    </>
  );
}
