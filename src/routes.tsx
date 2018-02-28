/**
 * React Code Splitting
 *
 * [ Reference ] : https://reactjs.org/docs/code-splitting.html
 */

import * as React from 'react'
import Loadable from "react-loadable";

const Loading = () => <div>Loading...</div>;
const NotFound = () => <div>404: Not Found</div>;

const Home = Loadable({
  loader: () => import('./containers/home/home'),
  loading: Loading
});

const Comic = Loadable({
  loader: () => import('./containers/comic/comic'),
  loading: Loading
});

const Ebook = Loadable({
  loader: () => import('./containers/ebook/ebook'),
  loading: Loading
});

const Music = Loadable({
  loader: () => import('./containers/music/music'),
  loading: Loading
});

export { Home, Comic, Ebook, Music, NotFound };