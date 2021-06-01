import logo from './logo.svg';
import './App.css';
import HelloButton from './components/HelloButton'
import CheckboxExample from './components/CheckboxExample'
import TextInput from './components/TextInput'
import ButtonStyled from './components/ButtonStyled'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500], 
    },
    secondary: {
      main: orange[400],
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
      <div className="App">
      <header className="App-header">
        <AppBar color="secondary">
          <ToolBar>
    <IconButton>
      <MenuIcon />
    </IconButton>
    MUI Theming
    <Button>
      Login
    </Button>
          </ToolBar>
        </AppBar>
        <ButtonStyled/>
        {/* Grid practice */}
        <Grid container spacing={2} justify="center">
          <Grid item xs={3} sm={6}>
          <Paper style={{ height:75, width:'100%', }}/>
          </Grid>
          <Grid item xs={3} sm={6}>
          <Paper style={{ height:75, width:'100%', }}/>
          </Grid>
          <Grid item xs={3} sm={6}>
          <Paper style={{ height:75, width:'100%', }}/>
          </Grid>
          </Grid>

        <TextInput/>
      <CheckboxExample/>
        <HelloButton/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
