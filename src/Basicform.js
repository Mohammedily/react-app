import { Formik } from 'formik';
import { useFormik } from 'formik';
import * as  yup from 'yup';


// const validateForm = (values) =>{
//   console.log("validateForm", values);

//   const errors = {};

//   if(values.email.length < 5){
//     errors.email = "please provide  longer email";
//   } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
//     errors.email = 'Invalid email address';
//   }
    



//   if(values.password.length < 8){
//     errors.password = "please provide  longer password";
//   } else if (values.password.length > 12){
//     errors.password = "please provide  shorter password";
//   }
//   return errors;
// }


// export function Basicform() {
//    return (
//     <div>
//       <Formik initialValues={{ email:"", password:"" }}
//       validate={validateForm}
//       onSubmit={(values) => {
//         console.log("onSubmit", values)
//       }}
//       >
//    {(formik) => (
//      <form onSubmit={formik.handleSubmit}>
//     <input
//     type="email" 
//     id="email"
//     name="email"
//     value={formik.values.email}
//     onChange={formik.handleChange} 
//     onBlur={formik.handleBlur}
//     placeholder="enter your email"
//      />
//       {formik.errors.email && formik.touched.email && formik.errors.email}
//      <input
     
//       type="password"
//       id="password"
//      name="password"
//        value={formik.values.password} 
//        onChange={formik.handleChange} 
//        onBlur={formik.handleBlur}
//        placeholder="enter your password" 
//        />
//        {formik.errors.password && formik.touched.password && formik.errors.password}<br />
//      <button type="submit" >submit</button>
//    </form>)}
//    </Formik>
//    </div>
//   );
// }

// export function Basicform() {

// const formik = useFormik({
//   initialValues:{ email:"", password:"" },
//   validate: validateForm,
//       onSubmit : (values) => {
//       console.log("onSubmit", values)
//     }
// })
//   return (
 
//     <form onSubmit={formik.handleSubmit}>
//    <input
//    type="email" 
//    id="email"
//    name="email"
//    value={formik.values.email}
//    onChange={formik.handleChange} 
//    onBlur={formik.handleBlur}
//    placeholder="enter your email"
//     />
//      {formik.errors.email && formik.touched.email && formik.errors.email}
//     <input
    
//      type="password"
//      id="password"
//     name="password"
//       value={formik.values.password} 
//       onChange={formik.handleChange} 
//       onBlur={formik.handleBlur}
//       placeholder="enter your password" 
//       />
//       {formik.errors.password && formik.touched.password && formik.errors.password}<br />
//     <button type="submit" >submit</button>
//   </form>
//   )
// }


// const validateForm = (values) =>{
//   console.log("validateForm", values);

//   const errors = {};

//   if(values.email.length < 5){
//     errors.email = "please provide  longer email";
//   } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
//     errors.email = 'Invalid email address';
//   }
    



//   if(values.password.length < 8){
//     errors.password = "please provide  longer password";
//   } else if (values.password.length > 12){
//     errors.password = "please provide  shorter password";
//   }
//   return errors;
// }

 const formValidationSchema = yup.object({
  email: yup.string()
  .min(5, "need a bigger email🤬").required("Why not fill this email?")
  .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"pattern does not matched"),

password: yup.string()
.min(8, "need a longer password🤬")
.max(12, "Too much password🤬")
.required("Why not fill this password?"),
})

export function Basicform() {

  const {handleSubmit,values,handleChange,handleBlur,errors,touched}  =  useFormik({
    initialValues:{ email:"", password:"" },
  //  validate : validateForm,
  validationSchema: formValidationSchema,
        onSubmit : (values) => {
        console.log("onSubmit", values)
      }
  })
    return (
   
      <form onSubmit={handleSubmit}>
     <input
     type="email" 
     id="email"
     name="email"
     value={values.email}
     onChange={handleChange} 
     onBlur={handleBlur}
     placeholder="enter your email"
      />
       {errors.email && touched.email && errors.email}
      <input
      
       type="password"
       id="password"
      name="password"
        value={values.password} 
        onChange={handleChange} 
        onBlur={handleBlur}
        placeholder="enter your password" 
        />
        {errors.password && touched.password && errors.password}<br />
      <button type="submit" >submit</button>
    </form>
    )
  }
  