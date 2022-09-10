import { createTheme, ThemeProvider } from '@mui/material';
import { ListContextProvider } from './contexts/ListProvider';
import { LocalStorageContextProvider } from './contexts/LocalStorageProvider';
import './styles/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { ArchivePage } from './pages/ArchivePage';
import { Header } from './components/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f50b5',
      contrastText: '#fff'
    },
    secondary: {
      main: '#4dd0e1',
    },
    error: {
      main: '#ff1744',
    }
  },
});

function App() {
  return (
    <div className="App">
      <LocalStorageContextProvider>
        <ListContextProvider>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <Header>
                {/* <Settings /> */}
              </Header>
              <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/archive' element={<ArchivePage />} />
              </Routes>
            </ThemeProvider>
          </BrowserRouter>
        </ListContextProvider>
      </LocalStorageContextProvider>
    </div>
  );
}

export default App;
