"use client";

import { Box } from "@mui/material";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {

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
