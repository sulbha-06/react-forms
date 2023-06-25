import React from "react";
import ProductForms from "../Common/ProductForms";

const AddProduct = ()=>{
     const  initialValue = {name:null,model:null,description:null,price:null,type:null};
    return(<ProductForms initialValue={initialValue} isEdit={false}/>)
}
export default AddProduct;