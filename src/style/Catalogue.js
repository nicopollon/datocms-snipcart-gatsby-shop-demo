import styled from "styled-components";

export const Catalogue = styled.div`
  margin: 16vh 0;
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
export const CatalogueItem = styled.div`
  margin-bottom: 60px;
  @media screen and (min-width: 600px) {
    width: 45%;
  }
  @media screen and (min-width: 900px) {
    width: 28%;
  }
`;
