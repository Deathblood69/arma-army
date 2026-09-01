import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router'

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
})

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  )
}
