import Image from "next/image";
import styled from "styled-components"

interface SidebarProps {
  show: boolean;
}

export const Container = styled.div<SidebarProps>`
  display: flex;
  flex-direction: column;

  z-index: 5;

  position: absolute;
  top: 0;
  right: ${({ show }) => show ? '0' : '-500px'};

  justify-content: space-between;
  
  width: 486px;
  height: 100vh;
  
  background: #0F52BA;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  
  transition: 0.325s;
  
  animation: ${({ show }) => show ? 'moveShow' : 'moveClose'} 0.468s linear both alternate;

  @keyframes moveShow {
    0% {
      transform: translateX(500px);
    }
    100% {
      transform:translateX(0vw);
    }
  }

  @keyframes moveClose {
    0% {
        transform: translateX(0);
    }
    100% {
        transform:translateX(500px);
    }
  }
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

interface CloseButtonProps {
  size: number;
  fontSize: number;
}

export const Close = styled.button<CloseButtonProps>`
  display: flex;
  border-radius: 50%;

  font-size: ${({ fontSize }) => fontSize}em;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  background: #000000;

  text-align: center;

  font-style: normal;
  font-weight: 400;;

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
  
  padding: 30px 0;

  cursor: pointer;
  
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  
  color: #FFFFFF;
`;

export const ButtonAction = styled.button`
  cursor: pointer;
  
  height: 19px;
  padding: 0 7px;

  margin: 1px;

  border-radius: 5px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  color: #000000;

  transition: 0.325s;
  &:hover {
    background-color: #d9d9d9;
  }
`;

export const ListProducts = styled.div`
  display: grid;
  
  grid-template-columns: 1fr;
  
  grid-row-gap: 1rem;

  height: 400px;
  background-color: transparent;
`;

export const ImageProduct = styled(Image)`
  
`;

export const ItemProduct = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 66px 19px;
  height: 95px;
  
  background: #FFFFFF;
  
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  
  border-radius: 8px;

  background-color: #FFF;
`;

export const Description = styled.p`
  width: 133px;
  height: 33px;

  margin-left: 21px;

  font-style: normal;
  font-weight: 400;
  font-size: 13px;

  color: #2C2C2C;

`;

export const Separator = styled.div`
  height: 80%;
  border: 1px solid #d9d9d9;
`;

export const ContainerActions = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;

  border: 1px solid #000;

  height: 19px;

  background: #FFFFFF;
  border: 0.3px solid #BFBFBF;
  border-radius: 4px;
`;

export const Quantity = styled.p`
font-style: normal;
font-weight: 400;
font-size: 8px;

padding: 8px;

color: #000000;
`;

export const Price = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  margin-right: 15px;

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
