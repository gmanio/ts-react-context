import './assets/scss/common.scss';

import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Routes from './routes';
import { AppContext } from './context/app.context';

class App extends React.Component {
  state: any;
  arr = ['apple', 'banana', 'cherry', 'Dragon fruit', 'Egg Fruit', 'Fig'];
  private index: number;

  constructor(props) {
    super(props);
    this.index = 0;
    this.state = {
      appTitle: "start",
      update: (state) => this.setState(state)
    };
  }

  public render() {
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