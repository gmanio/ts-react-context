import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../../context/app.context';
import { Loader } from '../../components/loader/loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Routes from './../../routes';

class Home extends React.Component {
  state: { data: any[] }

  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  public componentDidMount() {
    axios.get('http://server.gman.io/employees')
      .then(res => {
        const data = res.data;
        this.setState({ data: data });
      })
  }

  public render() {
    return (
      <AppContext.Consumer>
        {this.renderWithContext}
      </AppContext.Consumer>
    )
  }

  public renderWithContext = (context) => {
    return (
      <div>
        {context.appTitle}
        <h1>Home</h1>
        <ul>
          <li>
            <Link to={`/ebook`}>ebook</Link>
          </li>
          <li>
            <Link to={`/comic`}>comic</Link>
          </li>
          <li>
            <Link to={`/music`}>music</Link>
          </li>
        </ul>
        {/*{*/}
          {/*this.state.data.map((employees) =>*/}
            {/*<div>*/}
              {/*{employees.emp_no}*/}
            {/*</div>*/}
          {/*)*/}
        {/*}*/}

      </div>
    )
  }
}

export default Home;