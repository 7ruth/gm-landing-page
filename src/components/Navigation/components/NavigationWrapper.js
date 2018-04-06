import styled from "styled-components";

const NavigationWrapper = styled.nav`
  background-color: black;
  color: #fff;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  font-weight: 700;
  height: 60px;
  justify-content: space-between;
  letter-spacing: 0.04em;
  line-height: 1.3;
  margin: auto;
  padding: 1em;
  width: 100%;

  a {
    color: #fff;
  }
  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
  }
`;

export default NavigationWrapper;