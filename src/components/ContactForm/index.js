import React from 'react';
 import { Formik } from 'formik';

 import styles from './styles.module.css';

 
 const Basic = () => (
   <div className="contactForm">
     <h2>Let's Talk</h2>
     <Formik
       initialValues={{ email: ''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           //TODO: handle value write
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
            <div>
            <br></br>
           <input
            class={styles.mailInput}
             type="email"
             name="email"
             placeholder="Enter your email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           </div>
           <br></br>
           <div>
           <button class="button button--outline button--primary button--lg" type="submit" disabled={isSubmitting}>
             Submit
           </button>
           </div>
         </form>
       )}
     </Formik>
   </div>
 );
 
 export default Basic;