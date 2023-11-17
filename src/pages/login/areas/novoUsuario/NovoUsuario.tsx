import React, { useState } from "react";
import { Input, Form, FormGroup, Label, Button } from "reactstrap";
// import { Api } from "../../../providers";
// import { ICadastroLogin } from "../../../interfaces";

export const NovoUsuario = () => {
  
//     const [cadastrar, setCadastrar] = useState<ICadastroLogin>({
//     Email: "",
//     Password: "",
//     ConfirmPassword: "",
//   });

//   const atualizarInput = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setCadastrar({ ...cadastrar, [name]: value });
//   };
//   const enviar = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     try {
//       const response = await Api.post("/Register", cadastrar);
//       if (response.status === 201) {
//         console.log("Deu bom");
//       }
//     } catch (error) {
//       console.log("erro: ", error);
//     }
//   };

  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-md-6 text-center text-md-start d-flex flex-column justify-content-center">
            <i>(Area Admin)</i>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Classifica
            <span className="text-primary"> business</span>
          </h1>
        </div>
        <div className="col-md-6">
          <div className="card my-5">
            <div className="card-body p-5">
              <div className="row">
                <div className="col">
                  <Form >
                    <h1>Cadastro</h1>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <div className="form-outline mb-4">
                        <Input
                          id="exampleEmail"
                          name="Email"
                          placeholder="with a placeholder"
                          type="email"
                          className="form-control active"
                        //   value={cadastrar.Email}
                        //   onChange={atualizarInput}
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
                        //   value={cadastrar.Password}
                        //   onChange={atualizarInput}
                        />
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Confirma Password</Label>
                      <div className="form-outline mb-4">
                        <Input
                          id="examplePassword"
                          name="ConfirmPassword"
                          placeholder="password placeholder"
                          type="password"
                        //   value={cadastrar.ConfirmPassword}
                        //   onChange={atualizarInput}
                        />
                      </div>
                    </FormGroup>
                    <Button type="submit">cadastrar</Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
