import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppContext, EbookContext } from '../../context/app.context';

class Ebook extends React.Component {
  private appContext: any;

  constructor(props) {
    super(props);
    console.log(props);
    debugger;
  }

  public handleChange = (e) => {
    const value = e.target.value;
    this.appContext.updateContext({ appTitle: value });
  }

  public render() {
    return (
      <AppContext.Consumer>
        {
          (appContext) => {
            this.appContext = appContext;
            return (
              <EbookContext.Consumer>
                {ebookContext => this.renderWithContext({ appContext, ebookContext })}
              </EbookContext.Consumer>
            )
          }
        }
      </AppContext.Consumer>
    );
  }

  public renderWithContext = ({ appContext, ebookContext }) => {
    return (
      <div>
        <input type="text" value={appContext.appTitle} onChange={this.handleChange.bind(this)}/>
        <h1>Ebook</h1>
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

export default Ebook;