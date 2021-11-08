import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/NavBar';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
//import ItemDetail from './Components/ItemDetail/ItemDetail';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Switch>
            
            <Route exact path='/'>
              <Header title='Bienvenidx!' />
              
              <Link to='/items'>
                <div id="divButtonArticle">
                  <button id="buttonArticleList" className="btn btn-primary">Lista de Artículos</button>
                </div>
              </Link>
            </Route>
                
            <Route exact path='/items'>
              <ItemListContainer greeting='Estas son las mejores ofertas para vos ;)' />
            </Route>
          
            <Route exact path='/items/:category'>
              <ItemListContainer greeting='Estas son las mejores ofertas para vos ;)' />
            </Route>
          
            <Route exact path='/items/:itemId'>
              <ItemDetailContainer />
            </Route>
          
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
