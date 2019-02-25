import Landing from './components/landing/landing.jsx';
import Blog from './components/blog';
import Games from './components/games/games.jsx';
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
        component: Landing
      }
    ]
  }
];
