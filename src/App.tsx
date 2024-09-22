import { ThemeProvider, createTheme } from '@mui/material/styles';
import CompetitionsList from './Pages/CompetitionsList/CompetitionsList'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Layout from './Components/Layout';
import Competition from './Pages/Competition/Competition';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <CompetitionsList />,
        },
        {
          path: "/competitions/:id",
          element: <Competition />
        }
      ],
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
