import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Fundo from '../../assets/Imagens/fundo.jpg'
import Logo from '../../assets/Imagens/logo.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* height: 100vh; */
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const ImgBackground = styled.img`
  background-repeat: no-repeat;
  height: 100vh;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 80vw;

  .custom-classname.react-toggle--checked .react-toggle-track {
    background-color: #ab199f;
  }
`

export const LogoContainer = styled.img`
  background-repeat: no-repeat;
  padding: 5em;
`

export const Input = styled.input`
  width: 30%;
  margin: 20px;
  border: none;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #c4c4c4;
  padding: 0px 0px 10px 20px;

  ::placeholder {
    color: #c4c4c4;
    opacity: 1;
  }

  :active {
    border-bottom-color: #05a484;
  }
`

export const Password = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 30%;

  margin-bottom: 50px;
  a {
    color: #157763;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #157763;
  }
`

export const Registre = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 20%;

  margin-bottom: 50px;
`

export const Button = styled.button`
  background: #5ba092;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.8em 9em;
  border: 2px solid #5ba092;
  border-radius: 3px;

  :active {
    background-color: #05a484;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  text-decoration: inherit;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`