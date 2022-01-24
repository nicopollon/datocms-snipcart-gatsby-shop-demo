import styled from "styled-components";

export const Product = styled.div`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

export const ProductImage = styled.div`
  border: 3px solid black;
  padding: 7px;
  width: 100%;
  position: relative;
  margin-bottom: 25px;
  box-shadow: 9px 9px black;

  img {
    width: 100%;
    display: block;
  }
`;
export const ProductDetails = styled.div`
  display: flex;
  align-items: center;
`;
export const ProductName = styled.div`
  font-weight: bold;
  padding-right: 20px;
`;
export const ProductPrice = styled.div`
  font-weight: normal;
  color: #555;
  font-size: 0.8rem;
`;
export const ProductBuy = styled.button`
  flex: 1;
  text-align: right;
  text-transform: uppercase;
  background: #663399;
  padding: 10px 20px;
  color: white;
  position: relative;
  font-weight: bold;
  cursor: pointer;
`;
