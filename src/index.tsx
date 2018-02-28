import './assets/scss/common.scss';

import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContext } from './context/app.context';
import * as Routes from './routes';

class App extends React.Component {
  state: { appTitle, updateContext };

  constructor(props) {
    super(props);
    this.state = {
      appTitle: "context API",
      updateContext: state => this.setState(state)
    };
  }

  componentDidUpdate() {
    document.title = this.state.appTitle;
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
            <Route component={Routes.NotFound}/>
          </Switch>
        </Router>
      </AppContext.Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));