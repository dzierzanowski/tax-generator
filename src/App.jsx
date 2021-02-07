import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './App.css'
import dove from './dove.jpg'
import generate from './generation-logic/generate';

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
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
  width: 95vw;
  flex: 1 0 auto;
`

const TaxTitle = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-bottom: 10px;
`

const Article = styled.p`
  text-align: left;
  font-size: 14px;
  margin: 8px 0;
`

const Button = styled.button`
  align-self: center;
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

  /*
   * Format:
   *  sentences[n]          - value for sentence `n`
   *  sentences['meta'][n]  - additional data for sentence `n`
   */
  const [sentences, setSentences] = useState(null)
  const [buttonText, setButtonText] = useState("Generuj")

  const buttonAction = () => {
    setSentences(generate())
    setButtonText("Generuj nowe")
    document.getElementById('topBar').scrollIntoView()
    // collectEvent()
  }

  const dateOpts = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  const date = (new Date()).toLocaleDateString('pl-PL', dateOpts)

  return (
    <Container className="App">
      <Header>
        <TopBar id="topBar">
          <div>Dziennik Ustaw</div>
          <div>Poz. 2135</div>
        </TopBar>
        <Logo src={dove}></Logo>
        <Title>Ustawa</Title>
        <Subtitle>z dnia {date} r.</Subtitle>
      </Header>
      <Main>
        {sentences && (
          <>
          <TaxTitle>{sentences['title']}</TaxTitle>
          <Article><b>Art. 1.</b> {sentences['art1']}.</Article>
          <Article><b>Art. 2.</b> (uzasadnienie)</Article>
          <Article><b>Art. 3.</b> {sentences['art3']}.</Article>
          <Article><b>Art. 4.</b> Ustawa wchodzi w życie z dniem {date} r.</Article>
          </>
        )}
        <Button onClick={buttonAction}>{buttonText}</Button>
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
