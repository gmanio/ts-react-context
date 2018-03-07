import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { fromPromise } from 'rxjs/observable/fromPromise';

class Comic extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = { value: '', result: [] };

    this.searchText = this.searchText.bind(this);
  }

  public componentDidUpdate() {

  }

  public componentWillUpdate() {

  }

  public render() {
    return (
      <div>
        <h1>Comic</h1>
        <div>
          <input type="text" onInput={this.searchText}/>
        </div>
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
        {
          this.state.result.map((emp) =>
            <div>
              {emp.first_name}
            </div>
          )
        }
      </div>
    )
  }

  private searchText(event: any) {
    const searchText = event.target.value;
    const apiPromise = axios.get('http://server.gman.io/employees/search/' + searchText);
    if ( searchText ) {
      fromPromise(apiPromise)
        .subscribe((result) => {
          this.setState({ value: searchText, result: result.data });
        })
    }
  }
}

export default Comic;