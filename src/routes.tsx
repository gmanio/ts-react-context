/**
 * React Code Splitting
 *
 * [ Reference ] : https://reactjs.org/docs/code-splitting.html
 */

import * as React from 'react'
import Loadable from "react-loadable";
import { Route } from 'react-router-dom';

const Loading = () => <div>Loading...</div>;
const NotFound = () => <div>404: Not Found</div>;

const LazyRoute = (props) => {
  const component = Loadable({
    loader: props.component,
    loading: Loading
  });

  return <Route {...props} component={component}/>;
}

export { LazyRoute, NotFound };