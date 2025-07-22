import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ img, title, dis, productId }) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem", padding: "1rem" }}>
      <Card.Img style={{ height: "240px" }} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{dis.slice(0, 100)}</Card.Text>
        <button
          onClick={() => navigate(`/product/${productId}`)}
          className="btn btn-outline-success"
        >
          More Details
        </button>
      </Card.Body>
    </Card>
  );
};
