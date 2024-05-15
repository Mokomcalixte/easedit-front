
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const LoginForm = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios({
            method: 'POST',
            url: 'http://localhost:3005/login',
            data: inputs
        }).then((response) => {
            console.log(response.headers['authorization'])
            localStorage.setItem('token', response.headers['authorization'])
            // Rediriger vers la page home après une connexion réussie
            navigate('/home');
        }).catch(error => {
            console.error('Error during login:', error);
                console.log('Login failed. Error:', error); // Ajoutez cette ligne pour afficher les erreurs côté client

        });
    };

    return (
        <LoginFormContainer onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <FormInput
                type="email"
                placeholder="Email"
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <FormInput
                type="password"
                placeholder="Password"
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
            <SubmitButton type="submit">Login</SubmitButton>
        </LoginFormContainer>
    );
};

const LoginFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    
`;

const FormInput = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`; 

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: green;

  border: 2px solid green;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: green;
    color: white;
  }
`;

export default LoginForm;
