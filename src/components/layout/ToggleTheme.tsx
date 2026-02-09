"use client";

import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <IconButton sx={{ ml: 1 }}>
        <Brightness7 />
      </IconButton>
    );
  }

  return (
    <IconButton
      sx={{ ml: 1,
            color: theme === 'dark' ? 'text.primary' : 'text.primary',
            '&:hover': {
                backgroundColor: 'action.hover',
            }
       }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      color="inherit"
    >
      {theme === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
