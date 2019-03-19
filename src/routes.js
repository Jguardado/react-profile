import Photos from './components/photos';
import Blog from './components/blog';
import Games from './components/games';
import Home from './components/home.jsx';

export default [
  {
    path: '/',
    component: Home,
    routes:[
      {
        path: "/blog",
        component: Blog
      },
      {
        path: "/games",
        component: Games,
      },
      {
        path: '/photography',
        component: Photos
      }
    ]
  }
];
