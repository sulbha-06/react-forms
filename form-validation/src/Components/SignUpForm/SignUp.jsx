import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './SignUp.css'
const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const SignUp = () => {
  return (
    <div className="App">
      <center>
        <h1>Register a new account</h1>
        <Formik
          initialValues={{
            fullname: "",
            password: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <div class="container">
              <Form className="formBody">
                <div class="row">
                    <label>Name</label>
                  <Field
                    class="form-control"
                    type="text"
                    name="fullname"
                    placeholder="Enter your fullname"
                  />
                  <div><ErrorMessage className="error" name="fullname" component="div" /></div>
                </div>
                <div class="row">
                    <label>Email</label>
                  <Field
                    class="form-control"
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                  <div><ErrorMessage className="error" name="email" component="div" /></div>
                </div>
                <div class="row">
                    <label>Password</label>
                  <Field class="form-control" type="password" name="password" />
                 <div> <ErrorMessage className="error" name="password" component="div" /></div>
                </div>
               <div className="buttons-group">
                 <button class="btn btn-primary" type="submit" disabled={isSubmitting}>
                  Submit
                </button>
                <button class="btn btn-primary" type="reset" >
                  Reset
                </button>
               </div>
              </Form>
            </div>
          )}
        </Formik>
      </center>
    </div>
  );
};
export default SignUp;
