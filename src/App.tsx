import { ThemeProvider, createTheme } from '@mui/material/styles';
import CompetitionsList from './Pages/CompetitionsList/CompetitionsList'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CompetitionsList />,
    }
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App
