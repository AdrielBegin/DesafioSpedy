import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Navbar, NavbarBrand, CardText, CardGroup, CardHeader, Col, Row, Button } from 'reactstrap';
import { NovoClassificados } from '../novoclassificados/NovoClassificados';
import { ICriarClassificados } from '../../interfaces';
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { Api } from '../../providers';
import { AtualizarClassificados } from '../atualizarclassificados/AtualizarClassificados';


export const Classificado = () => {

  const [modal, setModal] = useState(false);
  const [classificados, setClassificados] = useState<ICriarClassificados[]>([]);
  const [contador, setContador] = useState(0);

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
      const response = await Api.delete(`/api/Classificados/${Id}`);
      response.status === 201 && getClassificados()
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
    <div >
      <Navbar className='' color="dark" dark>
        <Col className='d-flex justify-content-center'>
          <NavbarBrand className='Brand'>
            <HiMagnifyingGlass /> Classificados
          </NavbarBrand>
        </Col>
      </Navbar>
      <div>
        <Row>
          <Col xs={12}>
            <Col className='d-flex justify-content-end ml-auto w-100'>
              <NovoClassificados getClassificados={getClassificados} />
            </Col>
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
                    <Button color="danger" onClick={() => excluir(classificado.Id)} >
                      Excluir
                    </Button>
                    <Col className='d-flex justify-content-center' >
                      <AtualizarClassificados classificado={classificado} getClassificados={getClassificados} />
                    </Col>
                  </Card>
                </Col>
              ))}
            </CardGroup>
            <Col className='flex-wrap m-3 p-2' style={{ display: 'flex', justifyContent: 'center' }}>
              <Card style={{ width: '48rem', backgroundColor: '#4E474F', borderRadius: '4px' }} className='text-center text-white ' >
                {contador} Classificados
              </Card>
            </Col>
          </Col>
        </Row>
      </div>
    </div>
  );
};