import * as React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../app.context';

class Home extends React.Component<{}, {}> {
  constructor(props: {}) {
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
      <div>{message.childMsg}</div>
    )
  }
}

export default Home;