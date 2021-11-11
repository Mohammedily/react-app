import { useState ,  useEffect} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {  useParams, useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import { movieValidationSchema } from './AddMovie';


export function EditMovie() {

  const  { id } = useParams();
  
  
  
  

  const [movie, setMovie] = useState(null);
  useEffect(()=> {
    fetch("https://6188a55fd0821900178d741d.mockapi.io/movies/" + id)
    .then(data => data.json())
    .then((mv) => setMovie(mv));
  }, [])

  
 
  console.log(id,movie);

    
  
    return   movie ?  <EditMovieForm movie={movie} /> : '';
    
  
    }

  function EditMovieForm({ movie }){
    const history = useHistory();

    const {handleSubmit,values,handleChange,handleBlur,errors,touched}  =  useFormik({
      initialValues:{ name:movie.name, poster:movie.poster, rating:movie.rating, summary:movie.summary, trailer:movie.trailer },
    
     validationSchema: movieValidationSchema,
          onSubmit : (updatedMovie) => {
            console.log("save", updatedMovie)
            editMovie(updatedMovie)
          },
    })

    // const [name, setName] = useState(movie.name);
    // const [poster, setPoster] = useState(movie.poster);
    // const [rating, setRating] = useState(movie.rating);
    // const [summary, setSummary] = useState(movie.summary);
    // const [trailer, setTrailer] = useState(movie.trailer);
  
    // const setMovieName = (event) => setName(event.target.value);

    const editMovie = (updatedMovie) => {
      // console.log({ name, poster, rating, summary,trailer });
      // const updateMovie = { name, poster, rating, summary,trailer };


      fetch("https://6188a55fd0821900178d741d.mockapi.io/movies/" + movie.id, {
      method:"PUT",
      body:JSON.stringify(updatedMovie),
      headers:  { 'Content-Type': 'application/json'},
    })
   .then(() => {history.push('/movies');}).catch((err) => console.log(err));
  }
  

    
    return(
      <form onSubmit={handleSubmit} className="add-movie-form">
    <TextField 
      id="name"
      name="name"
    value={values.name}
     onChange={handleChange} 
     onBlur={handleBlur}
      label="Name"
       variant="outlined"
       error={errors.name && touched.name}
       helperText={errors.name && touched.name && errors.name}
        />
    <TextField
    id="poster"
    name="poster"
     value={values.poster} 
      onChange={handleChange} 
     onBlur={handleBlur}
      label="Poster url"
      variant="outlined"
      error={errors.poster && touched.poster}
       helperText={errors.poster && touched.poster && errors.poster}
       />
    <TextField 
    id="rating"
    name="rating"
    value={values.rating}  
    onChange={handleChange} 
     onBlur={handleBlur} 
     label="Rating"
      variant="outlined"
      error={errors.rating && touched.rating}
       helperText={errors.rating && touched.rating && errors.rating}
       />
    <TextField
    id="summary"
    name="summary"
     value={values.summary}
       onChange={handleChange} 
     onBlur={handleBlur}
      label="Summary"
       variant="outlined" 
       error={errors.summary && touched.summary}
       helperText={errors.summary && touched.summary && errors.summary}
       />
    <TextField
    id="trailer"
    name="trailer"
     value={values.trailer} 
      onChange={handleChange} 
     onBlur={handleBlur}
      label="trailer"
       variant="outlined" 
       error={errors.trailer && touched.trailer}
       helperText={errors.trailer && touched.trailer && errors.trailer}
       />
    <Button
      type="submit"
      variant="contained"
      color="success">save</Button>
  </form>
    );
    
    }