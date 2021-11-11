import Button from '@mui/material/Button';
import { useState , useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import { EditMovie } from './EditMovie';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function MovieDetials() {
  const { id } = useParams();
//   const movie = movies[id];
  const history = useHistory();

  const [movie, setMovie] = useState([]);

  useEffect(()=> {
    fetch("https://6188a55fd0821900178d741d.mockapi.io/movies/" + id)
    .then(data => data.json())
    .then((mv) => setMovie(mv));
  }, [])


//   console.log(id, movies, movie);
  return (
    <div>
        {/* <h1> movies id is {id} </h1> */}

       <iframe width="100%"
        height="570"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>

      </iframe> 
      <div className="movie-detial-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p>{movie.summary}</p>
        <Button variant="contained"
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIosIcon />}
        >Back</Button>
      </div>
      </div>
  );
}
