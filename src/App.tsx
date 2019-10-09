import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './containers/Main'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  
`;
