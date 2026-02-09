"use client";

import {ThemeProvider as NextThemesProvider} from "next-themes";
import { ThemeProvider as MuithemeProvider, CssBaseline } from "@mui/material";
import {lightTheme, darkTheme} from "@/lib/theme";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AppWrapper from "./AppWrapper";

function MuiThemeWrapper ({ children}: {children: React.ReactNode}) {
  const {theme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  
  const currentTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <MuithemeProvider theme={currentTheme}>
      <CssBaseline />
      <AppWrapper>{children}</AppWrapper>
    </MuithemeProvider>
  );
}


export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider attribute='class' defaultTheme='light'>
      <MuiThemeWrapper>
      {children}
      </MuiThemeWrapper>
    </NextThemesProvider>
  );
}
