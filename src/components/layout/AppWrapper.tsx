"use client";

import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      {children}
    </Box>
  );
}
