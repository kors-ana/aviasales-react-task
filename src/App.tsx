import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { primaryTheme, GlobalStyles } from "./assets/styles";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./containers/Main";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <>
        <GlobalStyles />
        <Container className="App">
          <Header />
          <Wrapper>
            <Sidebar />
            <Main />
          </Wrapper>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;

const Container = styled.div`
  padding: 50px 103px;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
`;
