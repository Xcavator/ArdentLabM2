import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Credit from './components/Credit';
import MainPage from './components/MainPage';
import Header from "./components/Header";
import BGVideo from "./components/BGVideo";
import SWRIntern from "./components/SWRemoteIntern"
// import Mission from "./components/Mission";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Internships from "./components/Internships";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
      
        <BGVideo />
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/software-engineering-remote-interns' component={SWRIntern} />
          
          <Route path='*'>
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
        <Credit />
      </div>
    </Router>
  );
}

export default App;
