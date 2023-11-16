
import {
    Navbar,
    NavbarBrand,
    Col,
    Row,
    Button,
    Table,
} from "reactstrap";



export const AreaAdmin = () => {
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
            <Row>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    First Name
                                </th>
                                <th>
                                    Last Name
                                </th>
                                <th>
                                    Username
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
                                    Otto
                                </td>
                                <td>
                                    @mdo
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    2
                                </th>
                                <td>
                                    Jacob
                                </td>
                                <td>
                                    Thornton
                                </td>
                                <td>
                                    @fat
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    3
                                </th>
                                <td>
                                    Larry
                                </td>
                                <td>
                                    the Bird
                                </td>
                                <td>
                                    @twitter
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
};
