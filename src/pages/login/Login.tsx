import React, { useState } from "react";
import { Input, Form, FormGroup, Label, Button } from "reactstrap";
import { ILogin } from "../../interfaces/ILogin";
import { Api } from "../../providers";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Navbar,
  NavbarBrand,
  CardText,
  CardGroup,
  CardHeader,
  Col,
  Row,
  
} from "reactstrap";

export const Login = () => {
  const navigate = useNavigate();
  const [entrar, setEntrar] = useState<ILogin>({
    Email: "",
    Password: "",
    RememberMe: true,
  });

  const atualizarInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEntrar({ ...entrar, [name]: value });
  };
  const enviar = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await Api.post("/Login", entrar);
      if (response.status === 200) {
        navigate("/classificado");
        console.log("Deu bom");
      }
    } catch (error) {
      console.log("erro: ", error);
    }
  };

  return (
    <div className="container-fluid p-4">
      <div className="row">
        <Col className="col-md-6 text-center text-md-start d-flex flex-column justify-content-center">
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Classifica
            <span className="text-primary"> business</span>
          </h1>
        </Col>
        <Col className="col-md-6">
          <div className="card my-5">
            <div className="card-body p-5">
              <div className="row">
                <Col className="col">
                  <Form onSubmit={enviar}>
                    <h1>Login</h1>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <div className="form-outline mb-4">
                        <Input
                          id="exampleEmail"
                          name="Email"
                          placeholder="with a placeholder"
                          type="email"
                          className="form-control active"
                          value={entrar.Email}
                          onChange={atualizarInput}
                          autoComplete="null"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <div className="form-outline mb-4">
                        <Input
                          id="examplePassword"
                          name="Password"
                          placeholder="password placeholder"
                          type="password"
                          value={entrar.Password}
                          onChange={atualizarInput}
                        />
                      </div>
                    </FormGroup>
                    <Button type="submit">Entrar</Button>
                  </Form>
                </Col>
              </div>
              <div className="text-center">
                <p>or entrar up with:</p>
                <a className="ripple ripple-surface mx-3" role="button">
                  <a href="/cadastrar"> registrar </a>
                </a>
              </div>
            </div>
          </div>
        </Col>
      </div>
    </div>
  );
};
