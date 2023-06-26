import React from "react";
import formHeaders from "../../Utility/properties";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'
const ViewProducts = () => {
  const tableData = JSON.parse(localStorage.getItem("productDetail"));
  const tableHeader = Object.values(formHeaders);
  return (
    <>
      <div className="row">View Product list</div>
      <table className="table table-striped table-inverse table-responsive">
        <thead className="thead-inverse">
          <tr>
            {tableHeader.map((heads, index) => {
              return <th key={index}>{heads}</th>;
            })}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => {
            return(
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.model}</td>
              <td>{data.description}</td>
              <td>{data.price}</td>
              <td>{data.type}</td>
              <td><FontAwesomeIcon icon={faPen} /> <FontAwesomeIcon icon="fa-solid fa-pen" /></td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
};

export default ViewProducts;
