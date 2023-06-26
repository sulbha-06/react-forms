import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../SignUpForm/SignUp.css";
import formHeaders, { SignupSchema } from "../../Utility/properties";
import {v4 as uuidv4} from 'uuid';
const ProductForms = ({ initialValue, isEdit }) => {
  const { name, model, description, price, type } = initialValue;
  const headkeys = Object.keys(formHeaders);
const handleSubmit = (formData)=>{
  debugger;
  console.log("form Data---->",formData);
  formData.id =uuidv4();
  const savedFormData = JSON.parse(localStorage.getItem("productDetail"));
  if(savedFormData){
      const data = [formData , ...savedFormData];
      localStorage.setItem("productDetail",JSON.stringify(data));
  }else{
    const data =[{...formData}];
    // data.push(formData)
   const formDataString = JSON.stringify(data)
    localStorage.setItem("productDetail",formDataString);
  }
}
  return (
    <div className="productForm">
      <center>
        {!isEdit && <h1>Register a new product</h1>}
        {isEdit && <h1>Edit product</h1>}
        <Formik
          initialValues={{
            name: name,
            model: model,
            description: description,
            price: price,
            type: type,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
           handleSubmit(values);
          }}
        >
          {({ isSubmitting }) => (
            <div className="container">
              <Form className="formBody">
                {headkeys.map((name, index) => {
                  return (
                    <div key={index} class="row">
                      <div class="row">
                        <div className="col-md-5 labels">
                          <label>{formHeaders[name]}</label>
                        </div>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name={name}
                        placeholder={`Enter ${name}`}
                      />
                      <div>
                        <ErrorMessage
                          className="error"
                          name={name}
                          component="div"
                        />
                      </div>
                    </div>
                  );
                })}

                <div className="buttons-group">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
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
