// import { useState } from "react";
import { Movie } from './Movie';
import { AddMovie } from "./AddMovie";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router";
import { useState , useEffect} from "react";
import { EditMovie } from './EditMovie';
// export function MovieList({ movies, setMovies }) {
  
//   return (
//     <section>
//       <div className="movie-list">
//         {movies.map((mv, index) => (
//           <Movie
//             key={index}
//             name={mv.name}
//             poster={mv.poster}
//             rating={mv.rating}
//             summary={mv.summary}
//             id={index}
//             setMovies={setMovies}
//             movies={movies}
//             />
//         ))}
//       </div>
//     </section>
//   );
// }
export function MovieList() {
  const history = useHistory();

  const [movies, setMovies] = useState([]);

  const getMovies = ()=> {
    fetch("https://6188a55fd0821900178d741d.mockapi.io/movies" ,{
      method:"GET",
    })
    .then(data => data.json())
    .then((mvs) => setMovies(mvs));
  };

  const deleteMovie = (id) => { fetch("https://6188a55fd0821900178d741d.mockapi.io/movies/" +  id , 
  {
    method:"DELETE",
  }
  ).then(() => getMovies())
};


  useEffect( getMovies, [])

  return (
    <section>
      <div className="movie-list">
        {movies.map((mv, index) => (
          <Movie
            key={index}
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            summary={mv.summary}
            id={mv.id}
            DeleteMoviesButton = {
              <IconButton className="movie-show-button"
                onClick={() => deleteMovie(mv.id)}
              color="error"
              aria-label="Delete Movie"
              >
             <DeleteIcon />
            </IconButton>
            }
            EditMoviesButton = {
              <IconButton 
              style={{marginLeft: "auto"}}
              className="movie-show-button"

                onClick={() => history.push("/movies/edit/" + mv.id)}
              color="secondary"
              aria-label="Edit Movie"
              >
             <EditIcon />
            </IconButton>
            }
            />
        ))}
      </div>
    </section>
  );
}

    