import LinkSection from "../components/linkSection";
import ContentSection from "../components/contentSection";
import BlockSection from "../components/blockSection";
import styled from 'styled-components';
import React, { useState } from "react";

const Home = () => {
    const [currentParagraph, setCurrentParagraph] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);
    const [currentListItems, setCurrentListItems] = useState([]);

    const handleParagraphSubmit = (newParagraph) => {
      setCurrentParagraph(newParagraph);
    };

    const handleImageSubmit = (newImage) => {
      setCurrentImage(newImage);
    };

    const handleListSubmit = (newListItems) => {
      setCurrentListItems(newListItems);
    };

    return (
        <Container>
            <LinkSection />
            <ContentSection 
              paragraph={currentParagraph} 
              image={currentImage} 
              listItems={currentListItems} 
            />
            <BlockSection 
              onParagraphSubmit={handleParagraphSubmit} 
              onImageSubmit={handleImageSubmit} 
              onListSubmit={handleListSubmit} 
            />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start; /* Alignement des sections en haut */
    width: 100%;
    > * {
        flex: 1; /* Chaque section prend autant d'espace que possible */
        margin-right: 20px; /* Ajouter un espacement entre les sections */
    }
    > *:last-child {
        margin-right: 0; /* Ne pas ajouter de marges à la dernière section */
    }
`;

export default Home;
