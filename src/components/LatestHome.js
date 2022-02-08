import { Card, CardDeck } from "react-bootstrap";
import product_01 from "../assets/images/product_01.jpg";
import product_02 from "../assets/images/product_02.jpg";
import product_03 from "../assets/images/product_03.jpg";
import product_04 from "../assets/images/product_04.jpg";
import product_05 from "../assets/images/product_05.jpg";
import product_06 from "../assets/images/product_06.jpg";

const LatestHome = () => {
  return (
    <>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={product_01} />
          <Card.Body>
            <Card.Title> Kids Striped Pyjamas </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              aliquam nostrum vel
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </>
  );
};

export default LatestHome;
