import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({ item }) => {
  return (
    <Card style={{ width: '18rem', height: '300px' }}>
      <Card.Img style={{ height: '10rem', width: '100%' }} variant="top" src={item.imgId} />
      <Card.Body>
        <Card.Title> {item.title}</Card.Title>
        <Card.Text> {item.description}</Card.Text>
        <Link to={`/item/${item.id}`}>
          <Button variant="primary">Mostrar mas</Button>
        </Link>
      </Card.Body>
    </Card>

  );
}

