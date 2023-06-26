import * as Yup from "yup";
const formHeaders = {
  name: "Product Name",
  model: " Product Model",
  description: "Product Description",
  price: "Product Price",
  type: "Product Type",
};
export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Name of product cannot be less than 5 characters!")
    .max(50, "Name of product cannot be more than 25 characters!")
    .required("Name of product Required"),
  model: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().max(9999999, "Too Long!").required("Required"),
  type: Yup.string().min(1, "Too Short!"),
});
export default formHeaders;
