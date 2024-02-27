
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <AppContainer>
      <NavBar />
      <ItemListContainer />
      {}
    </AppContainer>
  );
};

export default App;
