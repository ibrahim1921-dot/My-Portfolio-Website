import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main:  '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
        default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
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

     MuiButtonBase: {
            defaultProps: {
                disableRipple: true, // Disable ripple effect globally
            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true, // Disable ripple effect for Button component
            }
        }
  },
});

// Dark theme
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main:'#90caf9',
        },
        secondary: {
            main: '#f48fb1',
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