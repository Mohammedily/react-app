import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { EditMovie }  from './EditMovie';
import { useHistory } from "react-router";
import { useFormik } from 'formik';
import * as  yup from 'yup';
// export function AddMovie({ movies, setMovies }) {



//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");
//   const [trailer, setTrailer] = useState("");
//   const history = useHistory();


//   const resetMovieForm = () => {
//     setName("");
//     setPoster("");
//     setRating("");
//     setSummary("");
//   };
//   const setMovieName = (event) => setName(event.target.value);
//   const addMovie = () => {
//     console.log({ name, poster, rating, summary,trailer });
//     const newMovie = { name, poster, rating, summary,trailer };

//     // setMovies([...movies, newMovie]);
   
    
//     fetch("https://6188a55fd0821900178d741d.mockapi.io/movies",{
//       method:"POST",
//       body:JSON.stringify(newMovie),
//       headers:  { 'Content-Type': 'application/json'},
//     })
//    .then(() => {history.push('/movies') ; resetMovieForm(); }).catch((err) => console.log(err))
  
//   };



//   return (
//   <div className="add-movie-form">
//     <TextField value={name} onChange={setMovieName} label="Name" variant="outlined" />
//     <TextField value={poster} onChange={event => setPoster(event.target.value)} label="Poster url" variant="outlined" />
//     <TextField value={rating} onChange={event => setRating(event.target.value)} label="Rating" variant="outlined" />
//     <TextField value={summary} onChange={event => setSummary(event.target.value)} label="Summary" variant="outlined" />
//     <TextField value={trailer} onChange={event => setTrailer(event.target.value)} label="trailer" variant="outlined" />
//     <Button onClick={addMovie} variant="contained">Add movies</Button>
//   </div>
//   );
// }

export  const movieValidationSchema = yup.object({
  name : yup.string().min(3,"Need a bigger name").required("A name is in need"),
  pic : yup.string().required("A poster is in need"),
  summary : yup.string().min(20,"summary").required("A poster is in need"),
  trailer : yup.string().required("trailer"),
  rating : yup.number()
  .min(0)
  .max(10).required("rating"),
})

export function AddMovie({ movies, setMovies }) {


  const history = useHistory();

  const addMovie = (newMovie) => {
   
    // const newMovie = {};
    fetch("https://6188a55fd0821900178d741d.mockapi.io/movies",{
      method:"POST",
      body:JSON.stringify(newMovie),
      headers:  { 'Content-Type': 'application/json'},
    })
  .then(() => {history.push('/movies') ;
  //  resetMovieForm();
   }).catch((err) => console.log(err))
  
  };
  const {handleSubmit,values,handleChange,handleBlur,errors,touched}  =  useFormik({
    initialValues:{ name:"", poster:"", rating:"", summary:"", trailer:"" },
  
   validationSchema: movieValidationSchema,
        onSubmit : (newMovie) => {
          console.log("onSubmit", newMovie)
          addMovie(newMovie)
        },
  })





  return (
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
      variant="contained">Add movies</Button>
  </form>
  );
}
