import styled from "styled-components"

export const Container = styled.div`
  display: flex;

  height: 101px;
  background-color: #0F52BA;

  align-items: center;

  justify-content: space-between;
`;

export const ContentLogo = styled.div`
  display: flex;

  margin: 28px 65px; 

  align-items: baseline;
`;

export const Logo = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;

  color: white;
`;

export const LogoTitle = styled.h4`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;

  color: white;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 90px;
  height: 45px;

  background: #FFFFFF;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
  
  margin-right: 89px;
`;