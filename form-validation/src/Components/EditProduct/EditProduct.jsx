import React from "react";
import ProductForms from "../Common/ProductForms";

const EditProduct = ()=>{
    const productData = JSON.parse(localStorage.getItem('productDetail'));
    console.log("productData----->",productData);
    //  const  initialValue = {name:null,model:null,description:null,price:null,type:null};
    return(<ProductForms initialValue={productData} isEdit={true}/>)
}
export default EditProduct;