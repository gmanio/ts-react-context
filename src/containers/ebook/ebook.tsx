import * as React from 'react';
import { Link } from 'react-router-dom';

class Ebook extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
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