import { Container, createTheme, ThemeProvider } from '@mui/material';
import { InputForm } from './components/InputForm';
import { ToDoList } from './components/ToDoLIst';
import { ListContextProvider } from './contexts/ListProvider';
import { LocalStorageContextProvider } from './contexts/LocalStorageProvider';
import './styles/App.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f50b5',
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
          <ThemeProvider theme={theme}>
            <Container>
              <InputForm />
              <ToDoList />
            </Container>
          </ThemeProvider>
        </ListContextProvider>
      </LocalStorageContextProvider>
    </div>
  );
}

export default App;
