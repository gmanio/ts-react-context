import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/app.context';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
  }

  public render() {
    return (
      <AppContext.Consumer>
        {this.renderWithContext}
      </AppContext.Consumer>
    )
  }

  renderWithContext = (message) => {
    return (
      <div>
        {message.appTitle}
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
      </div>
    )
  }
}

export default Home;