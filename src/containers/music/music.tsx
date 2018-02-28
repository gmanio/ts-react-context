import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/app.context';
import { interval } from 'rxjs/observable/interval';

class Music extends React.Component<{}, {}> {
  state: { appTitle: string; grandChildMsg: string; greatGrandChildMsg: string };
  arr = ['apple', 'banana', 'cherry', 'Dragon fruit', 'Eldberry', 'Feijoa', 'Guava'];
  private index: number;
  private interval$;

  constructor(props) {
    super(props);
    this.index = 0;
  }

  public componentWillUnmount() {
    // if ( this.interval$ ) {
    //   this.interval$.unsubscribe();
    // }
  }

  public updateContext(context) {
    this.interval$ = interval(1000).subscribe(() => {
      context.updateContext({ appTitle: this.arr[this.index++ % this.arr.length] });
    });
  }

  public render() {
    return (
      <AppContext.Consumer>
        {this.renderWithContext}
      </AppContext.Consumer>
    )
  }

  public renderWithContext = (context) => (
    <div>
      <button onClick={() => this.updateContext(context)}>start</button>
      {context.appTitle}
      <h1>Music</h1>
      <ul>
        <li>
          <Link to={`/home`}>home</Link>
        </li>
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

export default Music;