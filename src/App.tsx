import './App.css';
import Home from './views/home/Home';
import NavBar from './components/NavBar/NavBar';
import Container from './components/constainers/Container';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
