import styled from "styled-components";

export const Header = styled.div`
  background: #663399;
  color: white;
  border-bottom: 3px solid white;
  box-shadow: 0 16px 0 black;
`;
export const HeaderBody = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderTitle = styled.div`
  flex: 1;
  padding: 20px 0;
  font-family: "times new roman", times, serif;
  font-style: italic;

  a {
    font-size: 6em;
    font-weight: bold;
    position: relative;
    color: white;
    text-decoration: none;
    display: block;
    padding: 2px;
  }
`;
export const HeaderSummary = styled.div`
  text-decoration: none;
  color: white;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
export const HeaderLine = styled.div`
  font-size: 0.8rem;
`;
