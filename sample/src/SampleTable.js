import React from "react";
import SampleTableItem from "./SampleTableItem";

const SampleTable = ({ sampleData }) => {
  const allEnvs = sampleData.find(item => item.allEnvs.length).allEnvs || [];
  const envData =
    sampleData.find(item => allEnvs.includes(item.env)).data || [];

  const productNames =
    envData.length &&
    envData.map(item => {
      return item.name;
    });

  const getHeader = () => {};
  return (
    <table>
      <tr>
        <td> </td>
        {allEnvs.length &&
          allEnvs.map((item, idx) => {
            return (
              <th key={idx} scope="col">
                {item}
              </th>
            );
          })}
      </tr>
      {productNames.length &&
        productNames.map((productName, idx) => {
          return (
            <tr key={idx}>
              <th scope="row">{productName}</th>
              {allEnvs.length &&
                allEnvs.map((item, idx) => {
                  let envProductsData =
                    sampleData.find(product => product.env === item).data || [];
                  let productVersion =
                    envProductsData.length &&
                    envProductsData.find(
                      productData => productData.name === productName
                    ).version;

                  return <td key={idx}>{productVersion}</td>;
                })}
            </tr>
          );
        })}
    </table>
  );
};

export default SampleTable;
