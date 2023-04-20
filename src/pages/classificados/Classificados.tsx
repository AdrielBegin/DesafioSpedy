import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText, CardTitle, CardGroup, CardSubtitle, CardFooter, CardHeader, Col, Row, Button } from 'reactstrap';
import { NovoClassificados } from '../novoclassificados/NovoClassificados';
import { ICriarClassificados } from '../../interfaces';

import { Api } from '../../providers';


export const Classificado = () => {
  const [modal, setModal] = useState(false);
  const [classificados, setClassificados] = useState<ICriarClassificados[]>([]);
  const [contador, setContador] = useState(0);
  const toggle = () => setModal(!modal);
  const getClassificados = async () => {
    try {
      const response = await Api.get('/api/Classificados');
      setClassificados(response.data);
      setContador(response.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  const excluir = async (Id: number) => {
    try {
      await Api.delete(`/api/Classificados/${Id}`);
      getClassificados();
      setContador(contador - 1);
    } catch (error) {
      console.log("err: ", error)
    }
  };

  useEffect(() => {
    getClassificados()
  }, [])
  return (
    <div>
      <Row className='.container'>
        <Col xs={12}>
          <Col className='d-flex justify-content-end ml-auto w-100'>
            <NovoClassificados getClassificados={getClassificados} />
          </Col>
          <CardText>
            Classificados
          </CardText>
          <CardGroup className='d-flex  flex-wrap'>
            {classificados.map((classificado) => (
              <Col key={classificado.Id} className='m-3 p-2' sm="5" style={{ width: '18rem' }}>
                <Card body >
                  <CardHeader className='text-center secondary text-dark'>
                    {classificado.Titulo}
                  </CardHeader>
                  <CardText>
                    {classificado.Descricao}
                  </CardText>
                  <CardText>
                    Data de Cadastro: {new Date(classificado.DataHora).toLocaleDateString('pt-BR')}
                  </CardText>
                  <Button color="danger" onClick={() => excluir(classificado.Id)}>Excluir</Button>
                </Card>
              </Col>
            ))}
          </CardGroup>
          <Card className='text-center text-white' color="secondary">
            Classificados ({contador})
          </Card>
        </Col>
      </Row>
    </div>
  );
};