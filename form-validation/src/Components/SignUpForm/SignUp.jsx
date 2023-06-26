import React from "react";
import ProductForms from '../Common/ProductForms'
import './SignUp.css'


const SignUp = () => {
    const productData = {name: null,
  model:null,
  description: null,
  price:null,
  type: null}
  return (
    <>
      <ProductForms initialValue={productData} isEdit={false} />
    </>
 
  );
};
export default SignUp;
