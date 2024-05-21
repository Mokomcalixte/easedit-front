import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContentSection = ({ paragraph, image, listItems }) => {
  return (
    <ContentContainer>
      <h2>Content Section</h2>
      {paragraph && (
        <Paragraph style={{ color: paragraph.color, fontSize: paragraph.fontSize }}>
          {paragraph.text}
        </Paragraph>
      )}
      {image && <Image src={image.src} alt="Uploaded" style={{ width: image.width, height: image.height }} />}

      {listItems.length > 0 && (
        <ListContainer>
          {listItems.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ListContainer>
      )}
    </ContentContainer>
  );
};

ContentSection.propTypes = {
  paragraph: PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.string,
  }),
  image: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  listItems: PropTypes.arrayOf(PropTypes.string),
};

ContentSection.defaultProps = {
  paragraph: null,
  image: null,
  listItems: [],
};

const ContentContainer = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
`;

const ListContainer = styled.ol``;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

export default ContentSection;
