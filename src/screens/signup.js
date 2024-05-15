import styled from 'styled-components';
import SignUpForm from '../components/signupForm';

const SignUp= () =>{
    return(
        <div>
      
           <SignUpContainer>
                <SignUpForm/>
            </SignUpContainer>
           
        </div>
    );

}

const SignUpContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-size: cover;
background-position: center;
height: 80vh;
`
export default SignUp;