import styled from "styled-components"

export const Container = styled.div`
  display: flex;

  z-index: 1;
  /* opacity: 0.7; */

  position: fixed;
  top: 0;

  width: 100%;
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
  flex-direction: row;

  cursor: pointer;

  width: 90px;
  height: 45px;

  background: #FFFFFF;
  border-radius: 8px;
  
  padding: 0 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  align-items: center;
  justify-content: space-around;
  
  margin-right: 89px;
`;