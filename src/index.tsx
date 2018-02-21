import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Routes from './routes';
import AppContext from './app.context';

class App extends React.Component {
  state: { childMsg: string; grandChildMsg: string; greatGrandChildMsg: string };

  constructor(props) {
    super(props);
    this.state = { childMsg: "childMsg", grandChildMsg: "grandChildMsg", greatGrandChildMsg: "greatGrandChildMsg" };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Router>
          <Switch>
            <Route exact path="/" component={Routes.Home}/>
            <Route exact path="/home" component={Routes.Home}/>
            <Route exact path="/comic" component={Routes.Comic}/>
            <Route exact path="/ebook" component={Routes.Ebook}/>
            <Route exact path="/music" component={Routes.Music}/>
          </Switch>
        </Router>
      </AppContext.Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));

//https://api3.musicmates.co.kr/v2/channel/livechart