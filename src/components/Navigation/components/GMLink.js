import styled from "styled-components";

const GMLink = styled.a`
  position: relative;
  padding: 0 1.5em;
  &:hover {
    color: ${props => props.theme.hoverLink};
  }
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 0.5em;
  }
`;

export default GMLink;