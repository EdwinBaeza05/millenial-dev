import React, { Component,useEffect } from "react";
import Home from "./pages/home";
import Products from "./pages/products";
import ProjectsMore from './pages/ProjectsMore';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Layout from './components/Layout';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'
// library.add(faIgloo) 9304670 9304685 margarita gonzales
var scrollEvent = null;
const Error404 = 
  () => {
    useEffect( () => {
      console.log("Hola Mundo")
      const $nav = document.getElementsByTagName("nav")[0];
      $nav.classList.add("nav-transparent");
    })
    return(<div  style={{
      "margin":"100px 50px"
    }}>
      <h2 style={{"padding":"100px 20px","textAlign":"center"}}>
        ¡ERROR 404 PAGINA NO ENCONTRADA!
      </h2>
  </div>);

  }
class App extends Component {

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/ProjectsMore/:id"  component={ProjectsMore}/>
            <Route component={Error404}/>
          </Switch>
        </Layout>
      </Router>
    );
  }
}
export default App;
