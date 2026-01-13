"use client";

import * as React from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";
import { usePathname } from "next/navigation";

const pages = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "background.default",
        backdropFilter: "blur(12px)",
        borderBottom: 1,
        borderColor: "divider",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: { xs: 64, sm: 80 } }}>
          {/* Logo - Desktop */}
          <Link
            href="/"
            passHref
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 2,
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 1,
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <CodeIcon fontSize="small" />
              </Box>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "text.primary",
                }}
              >
                ASI
              </Typography>
            </Box>
          </Link>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  href={page.path}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
              <MenuItem
                onClick={handleCloseNavMenu}
                component={Link}
                href="/contact"
              >
                <Typography
                  textAlign="center"
                  sx={{ color: "primary.main", fontWeight: 600 }}
                >
                  Contact
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <Link
            href="/"
            passHref
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                gap: 1.5,
                flexGrow: 1,
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 1,
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <CodeIcon fontSize="small" />
              </Box>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "text.primary",
                }}
              >
                ASI
              </Typography>
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 4 }}>
              {pages.map((page) => (
                <Button
                  key={page.label}
                  component={Link}
                  href={page.path}
                  sx={{
                    color:
                      pathname === page.path ? "primary.main" : "text.primary",
                    fontWeight: pathname === page.path ? 600 : 500,
                    fontSize: "0.875rem",
                    textTransform: "none",
                    borderBottom: pathname === page.path ? 2 : 0,
                    borderColor: "primary.main",
                    "&:hover": {
                      color: "primary.main",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: 700,
                fontSize: "0.875rem",
                px: 3,
                borderRadius: 2,
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
