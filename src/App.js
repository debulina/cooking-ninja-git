import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
//page components
import Navbar from './components/Navbar';
//style
import './App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar ></Navbar>
        <switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/recipes/:id'>
            <Recipe />
          </Route>
          <Route path='/search/:id'>
            <Search />
          </Route>
        </switch>
      </BrowserRouter>      
    </div>
  );
}

export default App
