  import styled from "styled-components";

  export const H1 = styled.a`
    color: #000;
    font-size: 18px;
    line-height: 1.5;
    text-decoration: none;
  `
  
  export const H2 = styled.p`
    color: #000;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 700;
  `
  
  export const StarWarsLogo = styled.img`
  max-width: 300px;
  `
  
  export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  `
  
  export const Container2 = styled.div`
  display: flex;
  margin: 24px;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  padding: 48px;
  margin: 48px;
  border-radius: 25px;
  align-items: center;
  gap: 12px;
  text-align: center;

@media(max-width: 425px) {
  margin: 0; 
}
  `
  
  export const Button = styled.button`
    margin: 12px;
    width: 100px;
    border: none;
    border-radius: 5px;
  `