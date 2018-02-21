import * as React from 'react';
import { Link } from 'react-router-dom';

class Comic extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1>Comic</h1>
        <Link to={`/home`}>home</Link>
        <Link to={`/music`}>music</Link>
      </div>
    )
  }
}

export default Comic;

// export default Home = () => (
//   <h1>working</h1>
// );
