import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText, CardTitle, CardGroup, CardSubtitle, CardHeader, Col, Row, Button } from 'reactstrap';
import { NovoClassificados } from '../novoclassificados/NovoClassificados';
import { ICriarClassificados } from '../../interfaces';
import { Container } from './styles';
import { Api } from '../../providers';


export const Classificado = () => {
  const [modal, setModal] = useState(false);
  const [classificados, setClassificados] = useState<ICriarClassificados[]>([]);

  const toggle = () => setModal(!modal);

  const getClassificados = async () => {
    try {
      const response = await Api.get('/api/Classificados');
      setClassificados(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClassificados()
  }, [])
  return (
    <Row>
      <CardGroup>
        <Col className='col-12  m-0 p-2 pb-4'>
          <NovoClassificados getClassificados={getClassificados} />
        </Col>
        <Col className='m-3 p-2' sm="5" style={{ width: '18rem' }}>
          <Card body >
            <CardHeader>
              Header
            </CardHeader>
            <CardTitle tag="h5">
              Special Title Treatment
            </CardTitle>
            <CardText>
              With supporting text below as a natural dfasdfasdfasdfasdfasdfasdfasdfasdfasdfaslead-in to additional content.
            </CardText>
          </Card>
        </Col>
        <Col className='m-3 p-2' sm="5" style={{ width: '18rem' }}>
          <Card body >
            <CardHeader>
              Header
            </CardHeader>
            <CardTitle tag="h5">
              Special Title Treatment
            </CardTitle>
            <CardText>
              With supporting text below as a natural dfasdfasdfasdfasdfasdfasdfasdfasdfasdfaslead-in to additional content.
            </CardText>
          </Card>
        </Col>
        <Col className='m-3 p-2' sm="5" style={{ width: '18rem' }}>
          <Card body >
            <CardHeader>
              Header
            </CardHeader>
            <CardTitle tag="h5">
              Special Title Treatment
            </CardTitle>
            <CardText>
              With supporting text below as a natural dfasdfasdfasdfasdfasdfasdfasdfasdfasdfaslead-in to additional content.
            </CardText>
          </Card>
        </Col>
        <Col className='m-3 p-2' sm="5" style={{ width: '18rem' }}>
          <Card body >
            <CardHeader>
              Header
            </CardHeader>
            <CardTitle tag="h5">
              Special Title Treatment
            </CardTitle>
            <CardText>
              With supporting text below as a natural dfasdfasdfasdfasdfasdfasdfasdfasdfasdfaslead-in to additional content.
            </CardText>
          </Card>
        </Col>
      </CardGroup>
    </Row>
  );
};