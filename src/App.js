import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/NavBar';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Switch>
            
            <Route exact path='/'>
              <Header title='Bienvenidx!' />
              
              <Link to='/items'>
                <button>Lista de Artículos</button>
              </Link>
            </Route>
                
            <Route exact path='/items'>
              <ItemListContainer greeting='Estas son las mejores ofertas para vos ;)' />
            </Route>
          
            <Route exact path='/items/:category'>
              <ItemListContainer greeting='Estas son las mejores ofertas para vos ;)' />
            </Route>
          
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
