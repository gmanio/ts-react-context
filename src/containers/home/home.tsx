///<reference path="../../../node_modules/@types/react/index.d.ts"/>
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as axios from 'axios';
import { AppContext } from '../../context/app.context';

class Home extends React.Component {
  state: { screenshot: any[] }

  constructor(props) {
    super(props);
    this.state = { screenshot: [] }
  }

  public componentDidMount() {
    // axios.get(`http://localhost:1100/puppeteer/get`)
    //   .then(res => {
    //     const screenshot = res.data;
    //     this.setState({ screenshot: screenshot });
    //   })
  }

  public render() {
    return (
      <AppContext.Consumer>
        {this.renderWithContext}
      </AppContext.Consumer>
    )
  }

  public renderWithContext = (message) => {
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
        {this.state.screenshot.map(({ url, screenshot }) => {
            return (
              <div key={url}>
                {url}
                <img src={'data:image/png;base64,' + screenshot} alt="" width="100" height="100"/>
              </div>
            );
          }
        )}
      </div>
    )
  }
}

export default Home;