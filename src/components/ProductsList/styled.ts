import Image from "next/image";
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  margin: 217px 0;

  padding: 0 255px;

  @media screen and (max-width: 1500px) {
    padding: 0 100px;
  }

  @media screen and (max-width: 1000px) {
    padding: 0 50px;
  }
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 22px;
  grid-row-gap: 31px;
  
  border-radius: 10px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 41px;
  }
    
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 41px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 51px;
  }

  .thing::before {
    opacity: 0;
  }
  .thing::after {
    opacity: 1;
  }
  
  .thing {
    animation-name: rendering;
    animation-duration: 3s;
  }

  @keyframes rendering {
    0% {
      width: 0;
      height: 0;
      opacity: 0;
    }
    100% {
        width: 100%;
        height: 100%;
        opacity: 100%;
    }
  }

  .thing:nth-child(1) {animation-delay: 0.0s; }
  .thing:nth-child(2) {animation-delay: 0.5s; }
  .thing:nth-child(3) {animation-delay: 1.0s; }
  .thing:nth-child(4) {animation-delay: 1.5s; }
  .thing:nth-child(5) {animation-delay: 2.0s; }
  .thing:nth-child(6) {animation-delay: 2.5s; }
  .thing:nth-child(7) {animation-delay: 2.7s; }
  .thing:nth-child(8) {animation-delay: 2.9s; }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;

  background: #FFFFFF;
  
  justify-content: flex-end;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  
  border-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px;
`;

export const ContainerButton = styled.div`
  display: flex;

  padding: 8px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  color: #FFFFFF;

  margin-top: 12px;

  background: #0F52BA;
  border-radius: 0px 0px 8px 8px;

  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled(Image)`
  margin-top: 18px;
`;

export const LinePriceTitle = styled.div`
  display: flex;

  align-items: baseline;
  justify-content: space-between;
`;

export const ProductTitle = styled.h1`
  margin-top: 14px;

  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: #2C2C2C;
`;

export const Price = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: center;

  background: #373737;
  border-radius: 5px;

  padding: 3px 4px;

  font-style: normal;
  font-weight: 700;
  font-size: 15px;

  color: #FFFFFF;
`;

export const ProductDescription = styled.p`
  margin-top: 8px;

  font-style: normal;
  font-weight: 300;
  font-size: 10px;

  color: #2C2C2C;

`;