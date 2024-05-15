import styled from 'styled-components';
import LoginForm from "../components/loginForm";

const Login = () =>{
    return(
        <div>
      
           <LoginContainer>
               <LoginForm/>
           </LoginContainer>
           
        </div>
    );

}

const LoginContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-size: cover;
background-position: center;
height: 80vh; /* Faites en sorte que le conteneur prenne toute la taille de l'écran */
`
export default Login;