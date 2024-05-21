// ParagraphBlock.js
import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  color: blue;
  font-weight: bold;
`;

const ParagraphBlock = ({ text }) => {
  return <StyledParagraph>{text}</StyledParagraph>;
};

export default ParagraphBlock;
