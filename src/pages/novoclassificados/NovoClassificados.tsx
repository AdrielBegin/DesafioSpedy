import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { ICriarClassificados } from '../../interfaces';
import { Api } from '../../providers';
import Swal from 'sweetalert2'



interface INovoClassificado {
  getClassificados: () => void
}

export const NovoClassificados = ({ getClassificados }: INovoClassificado) => {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const toggleModal = () => setModal(estadoAnterior => !estadoAnterior);
  const [classifica, setClassifica] = useState<ICriarClassificados>({ Id: 0, Titulo: '', Descricao: '', DataHora: '' });


  const atualizarEstado = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setClassifica(usuarioAnterior => ({ ...usuarioAnterior, [name]: value }));
  }

  const enviar = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await Api.post('/api/Classificados', classifica);
      response.status === 201 && getClassificados();
      Swal.fire({
        title: 'Salvo com sucesso',
        confirmButtonColor: '#198754',
        icon: 'success',
      });
    } catch (error) {
      console.log("err: ", error)
    }
    setClassifica({
      Id: 0,
      Titulo: '',
      Descricao: '',
      DataHora: ''
    });

    toggleModal();
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '0px',
          padding: '1vw 25px 0px'
        }}>
        <Button
          className=' m-0 '
          color="success"
          onClick={toggleModal}
          style={{
            opacity: '0.80'
          }}
        >
          + Novo Classificado
        </Button>
        <Modal
          isOpen={modal}
          toggle={toggleModal}
        >
          <Form onSubmit={enviar}>
            <ModalHeader
              className='d-flex flex-column'
              toggle={toggleModal}>
              Novo Classificado
            </ModalHeader>
            <ModalBody>
              <Input
                name='Titulo'
                className='w-100 my-2'
                onChange={atualizarEstado}
                value={classifica.Titulo}
                placeholder='Titulo' required />
              <Input
                name='Descricao'
                className='w-100 my-2'
                onChange={atualizarEstado}
                value={classifica.Descricao}
                placeholder='Descrição'
                required />
            </ModalBody>
            <ModalFooter>
              <Button
                color="success"
                type='submit'>
                Salvar
              </Button>{''}
              <Button
                color=""
                style={{
                  background: '#dc3545',
                  color:'white',
                  opacity: '0.75'
                }}
                onClick={toggle}>
                Cancelar
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>      
    </>
  )
}