import styled from "styled-components";

const SocialLink = styled.a`
  align-items: center;
  display: flex;
  filter: grayscale(100%) brightness(200%);
  :hover {
    filter: grayscale(0%) brightness(100%);
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export default SocialLink;