'use client';
import { useState, useSyncExternalStore } from "react";
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
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
} from "@mui/material";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IosShareIcon from "@mui/icons-material/IosShare";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const hasNativeShare = useSyncExternalStore(
    () => () => {},
    () => "share" in navigator,
    () => false
  );
  const menuOpen = Boolean(anchorEl);

  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://abdul-sobur-portfolio.vercel.app";
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  const handleShareClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePlatformShare = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
    setAnchorEl(null);
  };

  const handleCopyLink = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(postUrl);
    setCopied(true);
    setAnchorEl(null);
  };

  const handleNativeShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.share({ title: post.title, text: post.excerpt, url: postUrl });
    } catch {
      // user cancelled or browser doesn't support — do nothing
    }
    setAnchorEl(null);
  };

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${post.title} ${postUrl}`)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(postUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
  };

  return (
    <>
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

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: "auto" }}
        >
          <Button
            endIcon={<ArrowOutwardIcon sx={{ fontSize: 16 }} />}
            sx={{
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

          <IconButton
            size="small"
            onClick={handleShareClick}
            aria-label="Share this post"
            sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
          >
            <ShareIcon fontSize="small" />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>

    <Menu
      anchorEl={anchorEl}
      open={menuOpen}
      onClose={handleMenuClose}
      onClick={(e) => e.stopPropagation()}
      slotProps={{ paper: { elevation: 3, sx: { minWidth: 180, borderRadius: 2 } } }}
    >
      <MenuItem onClick={(e) => handlePlatformShare(e, shareLinks.whatsapp)}>
        <ListItemIcon>
          <WhatsAppIcon fontSize="small" sx={{ color: "#25D366" }} />
        </ListItemIcon>
        <ListItemText>WhatsApp</ListItemText>
      </MenuItem>

      <MenuItem onClick={(e) => handlePlatformShare(e, shareLinks.twitter)}>
        <ListItemIcon>
          <TwitterIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>X (Twitter)</ListItemText>
      </MenuItem>

      <MenuItem onClick={(e) => handlePlatformShare(e, shareLinks.facebook)}>
        <ListItemIcon>
          <FacebookIcon fontSize="small" sx={{ color: "#1877F2" }} />
        </ListItemIcon>
        <ListItemText>Facebook</ListItemText>
      </MenuItem>

      <MenuItem onClick={handleCopyLink}>
        <ListItemIcon>
          <ContentCopyIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Copy link</ListItemText>
      </MenuItem>

      {hasNativeShare && (
        <MenuItem onClick={handleNativeShare}>
          <ListItemIcon>
            <IosShareIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>More options</ListItemText>
        </MenuItem>
      )}
    </Menu>

    <Snackbar
      open={copied}
      autoHideDuration={2000}
      onClose={() => setCopied(false)}
      message="Link copied to clipboard"
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    />
  </>
  );
}