//section 1
import styled from 'styled-components';
const LinkSection = () => {
    return(
        <LinkContainer>
            <h2>Section 1</h2>
            
        </LinkContainer>
    );
};
const LinkContainer = styled.div`
  background-color: white;
  padding: 20px;
  margin-bottom: 20px; /* Ajout d'espace entre les sections */
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Ajout de flou */
  width: 100%; /* Les sections occupent tout l'espace disponible */
`;
export default LinkSection;