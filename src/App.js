import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/NavBar';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <Header title='Bienvenidx!' />
      <ItemListContainer greeting='Estamos preparando las mejores ofertas para vos ;)' />
    </>
  );
}

export default App;
