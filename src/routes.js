import Photos from './components/photos';
import Blog from './components/blog';
import Games from './components/games';
import App from './components/app';

export default [
  {
    path: '/',
    component: App,
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
