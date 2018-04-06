import styled from "styled-components";

const LogoText = styled.div`
  text-align: left;
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 13px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export default LogoText;