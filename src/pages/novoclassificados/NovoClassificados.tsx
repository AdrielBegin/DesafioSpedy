import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { ICriarClassificados } from '../../interfaces';
import { Api } from '../../providers';

interface INovoClassificado {
  getClassificados: () => void
}



export const NovoClassificados = ({getClassificados}: INovoClassificado) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const toggleModal = () => setModal(prevState => !prevState);
  const [classifica, setClassifica] = useState<ICriarClassificados>({ Id: 0, Titulo: '', Descricao: '', DataHora: '' });



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setClassifica(prevUser => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await Api.post('/api/Classificados', classifica); 
      response.status === 201 && getClassificados()      
    } catch (error) {
      console.log("err: ", error)
    }
    setClassifica({ Id: 0, Titulo: '', Descricao: '', DataHora: '' });
    toggleModal();

  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '0px', padding: '1vw 25px 0px'}}>
        <Button color="success" onClick={toggleModal} className=' m-0 '>
          + Novo Classificado
        </Button>
        <Modal isOpen={modal} toggle={toggleModal} >
          <Form onSubmit={handleSubmit}>
            <ModalHeader toggle={toggleModal}>Novo Classificado</ModalHeader>
            <ModalBody>
              <Input name='Titulo' className='w-100 my-2' onChange={handleChange} value={classifica.Titulo} placeholder='Titulo' />
              <Input name='Descricao' className='w-100 my-2' onChange={handleChange} value={classifica.Descricao} placeholder='Descrição' />              
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type='submit' >
                Salvar
              </Button>{''}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>

      </div>
    </>
  )
}