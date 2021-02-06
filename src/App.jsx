import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './App.css'
import dove from './dove.jpg'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  font-family: "Lora", serif;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  font-size: calc(10px + 2vmin);
  color: black;
  margin-bottom: 5px;
`

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95vw;
  // min-height; 1em;
  font-size: 14px;
  text-align: left;
  padding-top: 8px;
  padding-bottom: 1px;
  border-bottom: 2px solid black;
`

// TODO: Credits to Syd Weiler
const Logo = styled.img`
  height: 70px;
  min-height: 70px;
  margin-top: 30px;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 17px;
  font-weight: bold;
`

const Subtitle = styled.div`
  font-size: 17px;
`

const Main = styled.main`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100vw;
  flex: 1 0 auto;
`

const Button = styled.button`
  background-color: white;
  border: 3px solid black;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 1em;
  min-height: 30px;
  margin: 10px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: black;
    color: white;
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100vw;
`

const FooterText = styled.div`
  width: 95vw;
  border-top: 2px solid black;
  padding-top: 1px;
  padding-bottom: 3px;
  font-size: 11px;
  text-align: left;
`

function App(props) {

  useEffect(() => {
    // collectVisit()
  }, [])

  const dateOpts = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  const date = (new Date()).toLocaleDateString('pl-PL', dateOpts)

  return (
    <Container className="App">
      <Header>
        <TopBar>
          <div>Dziennik Ustaw</div>
          <div>Poz. 2135</div>
        </TopBar>
        <Logo src={dove}></Logo>
        <Title>Ustawa</Title>
        <Subtitle>z dnia {date} r.</Subtitle>
      </Header>
      <Main>
        <Button>Generuj</Button>
      </Main>
      <Footer>
        <FooterText>
          <b>Ta strona to żart.</b> Po prawdziwe dokumenty z Dziennika Ustaw udaj się <a href="https://dziennikustaw.gov.pl/DU">tutaj</a>.
          <br />
          Grafika gołębia dzięki Syd Weiler.
        </FooterText>
      </Footer>
    </Container>
  );
}

export default App;
