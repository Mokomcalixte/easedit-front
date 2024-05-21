import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BlockSection = ({ onParagraphSubmit, onImageSubmit, onListSubmit }) => {
  const [paragraph, setParagraph] = useState('');
  const [color, setColor] = useState('#000000');
  const [fontSize, setFontSize] = useState('16px');
  const [image, setImage] = useState(null);
  const [imageWidth, setImageWidth] = useState('100');
  const [imageHeight, setImageHeight] = useState('100');
  const [listItems, setListItems] = useState([]);
  const [newListItem, setNewListItem] = useState('');

  const handleChange = (event) => {
    setParagraph(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(`${event.target.value}px`);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleImageWidthChange = (event) => {
    setImageWidth(event.target.value);
  };

  const handleImageHeightChange = (event) => {
    setImageHeight(event.target.value);
  };

  const handleListItemChange = (event) => {
    setNewListItem(event.target.value);
  };

  const handleAddListItem = () => {
    if (newListItem.trim() !== '') {
      setListItems([...listItems, newListItem]);
      setNewListItem('');
    }
  };

  const handleRemoveListItem = (index) => {
    const newList = listItems.filter((_, i) => i !== index);
    setListItems(newList);
  };

  const handleParagraphSubmit = () => {
    onParagraphSubmit({ text: paragraph, color, fontSize });
    setParagraph('');
    setColor('#000000');
    setFontSize('16px');
  };

  const handleImageSubmit = () => {
    if (image) {
      onImageSubmit({ src: image, width: `${imageWidth}px`, height: `${imageHeight}px` });
      setImage(null);
      setImageWidth('100');
      setImageHeight('100');
    }
  };

  const handleListSubmit = () => {
    onListSubmit(listItems);
    setListItems([]);
  };

  return (
    <BlockContainer>
      <h4>Block Paragraph</h4>
      <TextArea value={paragraph} onChange={handleChange} />
      <InputContainer>
        <label>Couleur:</label>
        <input type="color" value={color} onChange={handleColorChange} />
      </InputContainer>
      <InputContainer>
        <label>Taille:</label>
        <input
          type="number"
          value={fontSize.replace('px', '')}
          onChange={handleFontSizeChange}
        />{' '}
        px
      </InputContainer>
      <SubmitButton onClick={handleParagraphSubmit}>Valider</SubmitButton>

      <h4>Block Image</h4>
      <InputContainer>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </InputContainer>
      <InputContainer>
        <label>L:</label>
        <input
          type="number"
          value={imageWidth}
          onChange={handleImageWidthChange}
        />{' '}
        px
      </InputContainer>
      <InputContainer>
        <label>H:</label>
        <input
          type="number"
          value={imageHeight}
          onChange={handleImageHeightChange}
        />{' '}
        px
      </InputContainer>
      <SubmitButton onClick={handleImageSubmit}>Ajouter Image</SubmitButton>

      <h4>Block Liste Numérotée</h4>
      <InputContainer>
        <input
          type="text"
          value={newListItem}
          onChange={handleListItemChange}
          placeholder="Nouvel élément de liste"
        />
        <SubmitButton onClick={handleAddListItem}>Ajouter</SubmitButton>
      </InputContainer>
      <ListContainer>
        {listItems.map((item, index) => (
          <ListItem key={index}>
            {item}
            <RemoveButton onClick={() => handleRemoveListItem(index)}>Supprimer</RemoveButton>
          </ListItem>
        ))}
      </ListContainer>
      <SubmitButton onClick={handleListSubmit}>Valider Liste</SubmitButton>
    </BlockContainer>
  );
};

BlockSection.propTypes = {
  onParagraphSubmit: PropTypes.func.isRequired,
  onImageSubmit: PropTypes.func.isRequired,
  onListSubmit: PropTypes.func.isRequired,
};

const BlockContainer = styled.div`
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const InputContainer = styled.div`
  margin-bottom: 10px;
  label {
    margin-right: 10px;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ListContainer = styled.ol`
  margin-bottom: 10px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

export default BlockSection;
