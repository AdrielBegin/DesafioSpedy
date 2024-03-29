import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form, CardText } from 'reactstrap';
import { ICriarClassificados } from '../../interfaces';
import { Api } from '../../providers';


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
            const confirma = await Swal.fire({
                title: 'Tem certeza que deseja atualizar?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#198754',
                confirmButtonText: 'Atualizar',
                cancelButtonColor: '#dc3546',
                cancelButtonText: 'Cancelar',
            });
            if (confirma.isConfirmed) {
                classificados.DataHoraAtualizar = new Date().toISOString();
                const response = await Api.put(`/api/Classificados/${classifica.Id}`, classificados);
                response.status === 201 && getClassificados();
                getClassificados();
                setModal(false);
                Swal.fire({
                    title: 'Atualizado com sucesso',
                    confirmButtonColor: '#198754',
                    icon: 'success',
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Erro ao atualizado',
                icon: 'error',
            });
        }
        getClassificados();
        setClassifica(usuarioAnterior => ({ ...usuarioAnterior, DataHoraAtualizar: '' }));
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
                    color=""
                    onClick={toggleModal}
                    style={{
                        padding: '6px 88px 4px 88px',
                        background: '#3898C9',
                        color: 'white',
                        opacity: '0.80'
                    }}>
                    Atualizar
                </Button>
                <Modal isOpen={modal} toggle={toggleModal} >
                    <Form onSubmit={atualiza => {
                        atualiza.preventDefault();
                        atualizarClassificados(classifica)
                    }}>
                        <ModalHeader
                            className='d-flex flex-column'
                            toggle={toggleModal}>
                            Atualizar Classificado
                        </ModalHeader>
                        <ModalBody>
                            <CardText>
                                Data de Atualização: {classificado.DataHoraAtualizar ? new Date(classificado.DataHoraAtualizar).toISOString():''}
                            </CardText>
                            <Input
                                name='Titulo'
                                className='w-100 my-2'
                                onChange={atualizarEstado}
                                value={classifica.Titulo}
                                placeholder='Titulo' required
                            />
                            <Input
                                name='Descricao'
                                className='w-100 my-2'
                                onChange={atualizarEstado}
                                value={classifica.Descricao}
                                placeholder='Descrição'
                                required
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="success"
                                type='submit'
                                onClick={() => { atualizarClassificados(classifica) }}
                            >
                                Salvar
                            </Button>{''}
                            <Button
                                color=""
                                style={{
                                    background: '#dc3545',
                                    color: 'white',
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