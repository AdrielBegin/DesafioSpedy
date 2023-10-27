import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { ILogin } from '../../interfaces/ILogin';
import { Api } from '../../providers';

export const Login = () => {

   const [entrar, setEntrar] = useState<ILogin>({Email: '',Password:'',RememberMe:true});
   
   const handleInput = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = event.target;
    setEntrar({...entrar, [name]: value})
   }
   const enviar = async(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    try {
      const response = await Api.post('/Login', entrar);
      if(response.status === 201){
        console.log("Deu bom");        
      }       
    } catch (error) {
      console.log("erro: ", error)
    }  
   }
  
  return (
    <MDBContainer fluid className='p-4'>

      <form onSubmit={enviar}>
        <MDBRow>
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              The best offer <br />
              <span className="text-primary">for your business</span>
            </h1>

            <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet, itaque accusantium odio, soluta, corrupti aliquam
              quibusdam tempora at cupiditate quis eum maiores libero
              veritatis? Dicta facilis sint aliquid ipsum atque?
            </p>

          </MDBCol>

          <MDBCol md='6'>

            <MDBCard className='my-5'>
              <MDBCardBody className='p-5'>
                <MDBRow>          
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' name='Email' label='E-mail' id='form1' type='email' value={entrar.Email} onChange={handleInput}/>
                    <MDBInput wrapperClass='mb-4' name='Password' label='Senha' id='form1' type='password' value={entrar.Password} onChange={handleInput}/>
                    {/* <MDBInput wrapperClass='mb-4' label='Confirma senha' id='form1' type='password' /> */}
                  </MDBCol>
                </MDBRow>  
                <MDBBtn className='w-100 mb-4' type='submit'>Registrar</MDBBtn>
                <div className="text-center">

                  <p>or entrar up with:</p>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <a href=""> registrar </a>
                  </MDBBtn>
                </div>  
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

      </form>

    </MDBContainer>
    
  );
}

