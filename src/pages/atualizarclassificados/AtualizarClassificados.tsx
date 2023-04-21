import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form,CardText } from 'reactstrap';
import { ICriarClassificados } from '../../interfaces';
import { Api } from '../../providers';

import { Classificado } from '../classificados/Classificados';

interface IAtualizarClassificado {
    classificado: ICriarClassificados;
    getClassificados: () => void
}

export const AtualizarClassificados = ({ classificado, getClassificados }: IAtualizarClassificado) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const toggleModal = () => setModal(estadoAnterior => !estadoAnterior);
    const [classifica, setClassifica] = useState<ICriarClassificados>(classificado);


    const atualizarEstado = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setClassifica(usuarioAnterior => ({ ...usuarioAnterior, [name]: value }));
    }

    const atualizarClassificados = async (classificados: ICriarClassificados) => {
        try {
            await Api.put(`/api/Classificados/${classifica.Id}`, classificados);
            getClassificados();
            setModal(false);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '0px', padding: '1vw 25px 0px' }}>
                <Button color="warning" onClick={toggleModal} className=' m-0 ' style={{padding: '6px 88px 4px 88px'}}>
                    Atualizar
                </Button>
                <Modal isOpen={modal} toggle={toggleModal} >
                    <Form onSubmit={atualiza => { atualiza.preventDefault(); atualizarClassificados(classifica) }}>
                        <ModalHeader className='d-flex flex-column' toggle={toggleModal}>Atualizar Classificado</ModalHeader>
                        <ModalBody>
                            <Input name='Titulo' className='w-100 my-2' onChange={atualizarEstado} value={classifica.Titulo} placeholder='Titulo' />
                            <Input name='Descricao' className='w-100 my-2' onChange={atualizarEstado} value={classifica.Descricao} placeholder='Descrição' />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" type='submit' onClick={()=>atualizarClassificados(classifica)}>
                                Salvar
                            </Button>{''}
                            <Button color="warning" onClick={toggle}>
                                Cancelar
                            </Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        </>
    )
}