import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 5;

  position: absolute;
  top: 0;
  right: 0;

  justify-content: space-between;
  
  width: 486px;
  height: 100vh;
  
  background: #0F52BA;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  
  transition: 0.325s;
  `;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;

  padding: 47px 36px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;

  align-items: baseline;
  justify-content: space-between;
`;

export const Close = styled.button`
  display: flex;
  border-radius: 50%;

  width: 38px;
  height: 38px;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  background: #000000;

  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 28px;

  color: #FFFFFF;
`;

export const Title = styled.h1`
  width: 180px;
  height: 56px;

  margin-top: 36px;
  margin-bottom: 70px;
  
  font-style: normal;
  font-weight: 700;
  font-size: 27px;

  color: #FFFFFF;
`;

export const Button = styled.div`
  display: flex;

  margin: auto;
  
  padding: 39px 0;

  cursor: pointer;
  
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  
  color: #FFFFFF;
`;

export const ListProducts = styled.div`
  display: grid;
  
  grid-template-columns: 1fr;
  
  grid-row-gap: 1rem;

  height: 400px;
  background-color: transparent;
`;

export const Image = styled.img`
  display: flex;

  width: 22px;
  height: 22px;
`;

export const ItemProduct = styled.div`
  display: flex;

  justify-content: space-between;

  padding: 66px 19px;
  height: 95px;
  
  background: #FFFFFF;
  
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  
  border-radius: 8px;

  background-color: #FFF;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;

  color: #2C2C2C;

`;

export const ContainerActions = styled.div`
  display: flex;

  width: 50px;
  height: 19px;

  background: #FFFFFF;
  border: 0.3px solid #BFBFBF;
  border-radius: 4px;
`;

export const Quantity = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;

  color: #000000;  
`;

export const Price = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  color: #000000;
`;

export const ContentAmount = styled.div`
  display: flex;
  flex-direction: row;

  margin: 42px 47px;

  align-items: center;
  justify-content: space-between;
`;

export const Amount = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;

  color: #FFFFFF;
`;

export const AmountTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;

  text-transform: uppercase;

  color: #FFF;
`;

export const ListFooter = styled.div`
  display: flex;
  
  background-color: #000;
`;
