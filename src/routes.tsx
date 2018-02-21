import * as React from 'react'

import Loadable from "react-loadable";

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./container/home/home'),
  loading: Loading
});

const Comic = Loadable({
  loader: () => import('./container/comic/comic'),
  loading: Loading
});

const Ebook = Loadable({
  loader: () => import('./container/ebook/ebook'),
  loading: Loading
});

const Music = Loadable({
  loader: () => import('./container/music/music'),
  loading: Loading
});

export { Home, Comic, Ebook, Music };