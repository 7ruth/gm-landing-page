import styled from "styled-components";


export const Gallery = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    margin: 0.5em;
    opacity: 0.95;
    transition: all .15s ease;

    &:hover {
      opacity: 1;
    }
  }
  
  ${props => props.shadow && (`
    img {
      box-shadow: 0 2px 8px rgba(0,0,0,.05), 0 0 1px rgba(0,0,0,.1);
    }
  `)}
  
  ${props => props.rounded && (`
    img {
      border-radius: 3px;
      overflow: hidden;
    }
  `)}
`;

export const GalleryRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* overflow: hidden; */
  margin: 0.5em;

  figure {
    margin: 0.25em;
  }
`;

