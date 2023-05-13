import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function ShowProduct(props) {
  const { phone } = props;
  const [phoneDetails, setPhoneDetails] = useState([]);

  useEffect(() => {
    setPhoneDetails(phone);
  }, [phone]);

  const deleteProduct = (item) => {};

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Thumbnail</th>
        </tr>
      </thead>
      <tbody>
        {phoneDetails.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.description}</td>
              <td>{value.price}</td>
              <td>
                <img src={value.thumbnail} alt="" />
              </td>
              <td>
                <Button onClick={deleteProduct}>Delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ShowProduct;
