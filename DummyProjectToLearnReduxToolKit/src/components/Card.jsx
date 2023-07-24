/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer
          style={{ backgroundColor: "white" }}
          className="text-center"
        >
          <Button variant="primary">Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductCard;
