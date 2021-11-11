import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Counter } from './Counter.1';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router";
import { EditMovie } from './EditMovie';

// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// export function Movie({ name, poster, rating, summary, id, setMovies, movies }) {
//   const [show, setShow] = useState(false);
//   const history = useHistory();
//   // const styles = { display: show ? "block" : "none" };
//   return (
//     <Card className="movie-container">

//       <img className="movie-poster"
//         src={poster}
//         alt={name} />
//       <CardContent>
//         <div className="movie-specs">
//           <h3 className="movie-name">{name}
//           <IconButton className="movie-show-button"
//               onClick={() => history.push('/movies/' + id)}
//               color="primary"
//               aria-label="Movie detials"
//               >
//                 <InfoIcon />
//             </IconButton>
//             <IconButton className="movie-show-button"
//                onClick={() => setShow(!show)}
//               color="primary"
//               aria-label={show ? "Hide" : "show"}
//               >
//               {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//             </IconButton></h3>
//           <p className="movie-rating">⭐{rating}</p>
//         </div>

//         {/* <button
//             className="movie-show-button">{show ? "Hide" : "Show"} description</button> */}
//         {/* <p style={styles}>{summary}</p> */}
//         {show ? <p>{summary}</p> : ""}
//         {/* <Counter /> */}
//       </CardContent>
//       <CardActions>
//         <Counter />
//         {/* <IconButton className="movie-show-button"
//                 onClick={() => {
//                   console.log(id, movies);
//                   const reminingMovies = movies.filter((mv,index) => index !== id);
//                  console.log(reminingMovies);
//                  setMovies(reminingMovies);
//                 }}
//               color="error"
//               aria-label="Delete Movie"
//               >
//              <DeleteIcon />
//             </IconButton> */}
//       </CardActions>
//     </Card>
//   );
// }


export function Movie({ name, poster, rating, summary, id, EditMoviesButton, DeleteMoviesButton }) {
  const [show, setShow] = useState(false);
  const history = useHistory();
  // const styles = { display: show ? "block" : "none" };
  return (
    <Card className="movie-container">

      <img className="movie-poster"
        src={poster}
        alt={name} />
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">{name}
          <IconButton className="movie-show-button"
              onClick={() => history.push('/movies/' + id)}
              color="primary"
              aria-label="Movie detials"
              >
                <InfoIcon />
            </IconButton>
            <IconButton className="movie-show-button"
               onClick={() => setShow(!show)}
              color="primary"
              aria-label={show ? "Hide" : "show"}
              >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton></h3>
          <p className="movie-rating">⭐{rating}</p>
        </div>

        {/* <button
            className="movie-show-button">{show ? "Hide" : "Show"} description</button> */}
        {/* <p style={styles}>{summary}</p> */}
        {show ? <p>{summary}</p> : ""}
        {/* <Counter /> */}
      </CardContent>
      <CardActions>
        <Counter />
       {EditMoviesButton}
       {DeleteMoviesButton}
      </CardActions>
    </Card>
  );
}
