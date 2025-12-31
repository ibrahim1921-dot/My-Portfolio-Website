import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main:  '#3713ec',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
        default: '#f6f6f8',
        paper: '#ffffff',
    }
  },
  typography: {
    fontFamily: 'var(--font-roboto), sans-serif',
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCard: {
        styleOverrides: {
            root: {
                root: {
                    borderRadius: 8,
                }
            }
        }
    },
    MuiPaper: {
        styleOverrides: {
            rounded: {
                borderRadius: 12,
            },
        },
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main:'#3713ec',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
    },
    typography: {
        fontFamily: 'var(--font-roboto), sans-serif',
    },
    shape: {
        borderRadius: 4,
    }
})