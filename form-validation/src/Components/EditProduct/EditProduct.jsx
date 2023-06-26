import React from "react";
import ProductForms from "../Common/ProductForms";

const EditProduct = () => {
  let  editData = {
    name: null,
    model: null,
    description: null,
    price: null,
    type: null,
  };
  const productData = JSON.parse(localStorage.getItem("productDetail"));
  if (productData) {
    editData = productData[0];
  }
  console.log("productData----->", productData);
  return <ProductForms initialValue={editData} isEdit={true} />;
};
export default EditProduct;
