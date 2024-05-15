import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import styled from 'styled-components';

const SignUpForm = () => {
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3005/signup', formData);
            console.log(response.data);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            });
            alert('Signup successful!');

            navigate('/login');
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                console.error('Status code:', error.response.status);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
        }
    };
    

    const handleLoginButtonClick = () => {
        navigate('/login'); // Redirection vers la page de connexion
    };

    return (
        <SignUpFormContainer onSubmit={handleSubmit}>
            <h2>SIGN UP</h2>
            <InputGroup>
                <FormInput
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <FormInput
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
            </InputGroup>
            <InputGroup>
                <FormInput
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <FormInput
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
            </InputGroup>
            <SubmitButton type="submit">Sign Up</SubmitButton>
            <LoginButton type="button" onClick={handleLoginButtonClick}>Login</LoginButton>
        </SignUpFormContainer>
    );
};

const SignUpFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;
`;

const InputGroup = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const FormInput = styled.input`
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex: 1;
`;

const SubmitButton = styled.button`
    padding: 10px;
    background-color: transparent;
    border: 2px solid green;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: green;
        color: white;
    }
`;

const LoginButton = styled.button`
    padding: 10px;
    background-color: transparent;
    border: 2px solid green;
    border-radius: 5px;
    cursor: pointer;
    width: 100%; /* Le bouton prendra la taille totale disponible */

    margin-top: 10px; /* Ajout d'un espace entre les deux boutons */
    &:hover {
        background-color: green;
        color: white;
    }
`;

export default SignUpForm;
