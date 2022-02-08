import Layout from '../../components/layouts/Layout';
// import ShopDirectory from '../../components/ShopDirectory/ShopDirectory';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { products } from '../../figsofeden-products';
import { Card, Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const products = await getDocs(collection(db, 'products'));
      const productsArray = [];
      products.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, ' => ', doc.data());

        const obj = {
          id: doc.id,
          ...doc.data(),
        };

        productsArray.push(obj);
      });

      setProducts(productsArray);
    } catch (error) {
      console.log(error);
    }
  }

  // function addProducts() {
  //   products.map(async (product) => {
  //     try {
  //       await addDoc(collection(db, 'products'), product);
  //       console.log(product);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  // }
  return (
    <Layout>
      <Container className="product-directory mx-auto">
        <Row xs={1} md={2} lg={3}>
          {products.map((product, index) => {
            return (
              <Col key={product.id}>
                <Card>
                  <Card.Img src={product.imageURL} alt="img" />
                  <Card.ImgOverlay>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
