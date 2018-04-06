import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  height: 100%;
  text-align: center;
  & h1 {
    font-size: 1.5em;
  }
`;

export default AppWrapper;