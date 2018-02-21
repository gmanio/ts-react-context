import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Comic, Ebook, Home, Music } from './routes';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/comic" component={Comic}/>
      <Route exact path="/ebook" component={Ebook}/>
      <Route exact path="/music" component={Music}/>
    </Switch>
  </Router>
);

ReactDOM.render(<App/>, document.getElementById("root"));

//https://api3.musicmates.co.kr/v2/channel/livechart