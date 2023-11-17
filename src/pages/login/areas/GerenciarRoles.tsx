import {
    Navbar,
    NavbarBrand,
    Col,
    Row,
    Button,
    Table,
} from "reactstrap";



export const GerenciarRoles = () => {
    return (
        <div>
            <Navbar
                style={{
                    backgroundColor: "#4E474F",
                }}
            >
                <Col className="d-flex justify-content-center">
                    <NavbarBrand className="Brand text-light">
                        Gerenciar Roles
                    </NavbarBrand>
                </Col>
                <Col className="d-flex justify-content-center">
                    <NavbarBrand className="Brand text-light">
                        Gerenciar Usuários
                    </NavbarBrand>
                </Col>
            </Navbar>
            <Col className="d-flex justify-content-center">
                Usuários
            </Col>
            <Row className="m-0">
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Usuário ID
                                </th>
                                <th>
                                    Nome
                                </th>                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    Mark
                                </td>                                
                                <td>
                                    <Col className="">
                                        <div className="">
                                            <Button>Excluir</Button>
                                        </div>
                                        <div className=" ">
                                            <Button>Editar</Button>
                                        </div>
                                    </Col>
                                </td>
                            </tr>                            
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
};