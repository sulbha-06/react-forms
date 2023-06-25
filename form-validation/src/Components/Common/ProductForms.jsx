import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import '../SignUpForm/SignUp.css'
import formHeaders,{SignupSchema} from "../../Utility/properties";

const ProductForms = ({initialValue }) => {
  console.log("formHeaders-->",formHeaders);
  const {name,model,description,price,type} = initialValue;
 const  headkeys = Object.keys(formHeaders);
  console.log("headkeys---->",headkeys);
  console.log(headkeys);

  return (
    <div className="App">
      <center>
        <h1>Register a new product</h1>
        <Formik
          initialValues={{
            name: name,
            model: model,
            description: description,
            price:price,
            type: type

          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
            localStorage.setItem("productDetail",JSON.stringify(values));
          }}
        >
          {({ isSubmitting }) => (
            <div class="container">
              <Form className="formBody">
                {headkeys.map((name)=>{
                  return (<div class="row">
                    <label>{formHeaders[name]}</label>
                  <Field
                    class="form-control"
                    type="text"
                    name={name}
                    placeholder= {`Enter ${name}`}
                  />
                  <div><ErrorMessage className="error" name={name} component="div" /></div>
                </div>)
                })}
                {/* <div class="row">
                    <label>Product Name</label>
                  <Field
                    class="form-control"
                    type="text"
                    name="name"
                    placeholder="Enter product name"
                  />
                  <div><ErrorMessage className="error" name="name" component="div" /></div>
                </div>
                <div class="row">
                    <label>Model</label>
                  <Field
                    class="form-control"
                    type="text"
                    name="model"
                    placeholder="Enter product model "
                  />
                  <div><ErrorMessage className="error" name="model" component="div" /></div>
                </div>
                <div class="row">
                    <label>Product Description</label>
                  <Field class="form-control" type="text" name="description" />
                 <div> <ErrorMessage className="error" name="description" component="div" /></div>
                </div>
                <div class="row">
                    <label>Price </label>
                  <Field class="form-control" type="text" name="price" />
                 <div> <ErrorMessage className="error" name="price" component="div" /></div>
                </div>
                <div class="row">
                    <label>Product type</label>
                  <Field class="form-control" type="text" name="type" />
                 <div> <ErrorMessage className="error" name="type" component="div" /></div>
                </div> */}
               <div className="buttons-group">
                 <button class="btn btn-primary" type="submit" disabled={isSubmitting}>
                  Add Product
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
export default ProductForms;
