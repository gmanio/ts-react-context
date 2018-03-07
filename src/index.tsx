import './assets/scss/common.scss';

import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContext, EbookContext } from './context/app.context';
import { LazyRoute, NotFound } from './routes';

class App extends React.Component {
  state: any;

  constructor(props) {
    super(props);
    const { setState } = this;

    this.state = {
      appTitle: "context API",
      updateContext: state => setState(state)
    }

  }

  componentDidUpdate() {
    document.title = this.state.appTitle;
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <EbookContext.Provider value={{ test: 'test' }}>
          <Router>
            <Switch>
              <LazyRoute exact path="/" component={() => import('./containers/home/home')}/>
              <LazyRoute exact path="/home" component={() => import('./containers/home/home')}/>
              <LazyRoute exact path="/comic" component={() => import('./containers/comic/comic')}/>
              <LazyRoute exact path="/ebook" component={() => import('./containers/ebook/ebook')}/>
              <LazyRoute exact path="/music" component={() => import('./containers/music/music')}/>
              <Route component={NotFound}></Route>
            </Switch>
          </Router>
        </EbookContext.Provider>
      </AppContext.Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));