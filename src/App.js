
import './App.css';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import { Counter } from './Counter.1';
import { ColorList } from "./ColorList"
import DeleteIcon from '@mui/icons-material/Delete';
import ColorBox from "./ColorBox.js"
import { MovieList } from './MovieList';
import { Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import {AddMovie} from "./AddMovie";
import { useState , useEffect} from "react";
import { EditMovie }  from './EditMovie';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AddIcon from '@mui/icons-material/Add';
import PaletteIcon from '@mui/icons-material/Palette';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { NotFound } from './NotFound';
import { MovieDetials } from './MovieDetials';
import { Welcome } from './Welcome';
import { TicTacToe } from './TicTacToe';
import { Basicform } from './Basicform';

  




function App() {
 
  

const [mode,setMode] = useState('dark');


  // const [movies, setMovies] = useState([]);
  const history = useHistory();
  const theme = createTheme({
    palette: {
      mode: mode ,
    },
  });

// useEffect(()=> {
//   fetch("https://6188a55fd0821900178d741d.mockapi.io/movies")
//   .then(data => data.json())
//   .then((mvs) => setMovies(mvs));
// }, [])



  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ minHeight: "100vh" }} elevation={4}>
    <div className="App">
       <Box sx={{ flexGrow: 1 }}>
             <AppBar position="static">
              <Toolbar>
              <Button startIcon={<HomeIcon/>} onClick={() => history.push("/")} color="inherit">Home</Button>
              <Button startIcon={<LocalMoviesIcon />}  onClick={() => history.push("/movies")} color="inherit">movies</Button>
              <Button startIcon={<AddIcon/>} onClick={() => history.push("/movies/add")}  color="inherit">Add movies</Button>
              <Button startIcon={<PaletteIcon />} onClick={() => history.push("/color-game")}  color="inherit">color game</Button>
              <Button startIcon={<PaletteIcon />} onClick={() => history.push("/tic-tac-toe-game")}  color="inherit">Tic Tac Toe</Button>
              <Button startIcon={<AddIcon/>} onClick={() => history.push("/form")}  color="inherit">Form</Button>



            <Button startIcon={ mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />} style = {{ marginLeft:"auto" }} onClick = {() => setMode(mode === "light" ? "dark" : "light") }color="inherit">{mode === "light" ? "dark" : "light"} mode</Button>

              </Toolbar>
      </AppBar>
    </Box>
      <Switch>
 {/* <Counter /> */}
 <Route exact path="/">
<Welcome /> 
</Route>
<Route path="/films">
   <Redirect to  ="/movies" />
 <MovieList />
 </Route>
<Route path="/movies/add">
 <AddMovie  />
 </Route>
 <Route path="/movies/edit/:id">
  <EditMovie  /> 
 </Route>
 <Route path="/movies/:id">
 <MovieDetials />
 </Route>
 <Route path="/movies">
 <MovieList    />
 </Route>
<Route path="/color-game">
<ColorList />
</Route>
<Route path="/tic-tac-toe-game">
<TicTacToe />
</Route>
<Route path="/form">
<Basicform />
</Route>
<Route path="**">
  <NotFound />
</Route>
</Switch>
 </div>
 </Paper>
 </ThemeProvider>
   );
  };
   



export default App;











