import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardGroup, Row, Container, Col } from 'react-bootstrap';
import shopWomen from '../../assets/shopWomen.jpg';
import shopMen from '../../assets/shopMen.jpg';
import shopKids from '../../assets/shopKids.jpg';
import './shopDirectory.css';

const ShopDirectory = () => {
  return (
    <Container classname="directory">
      <Row md={2} lg={3}>
        <Col>
          <Card className="shop-card">
            <Card.Img variant="top" src={shopWomen} />
            <Card.ImgOverlay>
              <Link to="#">Shop Women</Link>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="shop-card">
            <Card.Img variant="top" src={shopMen} />
            <Card.ImgOverlay>
              <Link to="#">Shop men</Link>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="shop-card">
            <Card.Img variant="top" src={shopKids} />
            <Card.ImgOverlay>
              <Link to="#">Shop Kids</Link>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row md={2} lg={3}>
        <Col sm={4}>
          <Card className="shop-card">
            <Card.Img variant="top" src={shopWomen} />
            <Card.ImgOverlay>
              <Link to="#">Shop Women</Link>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="shop-card">
            <Card.Img variant="top" src={shopMen} />
            <Card.ImgOverlay>
              <Link to="#">Shop men</Link>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="shop-card">
            <Card.Img variant="top" src={shopKids} />
            <Card.ImgOverlay>
              <Link to="#">Shop Kids</Link>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ShopDirectory;
