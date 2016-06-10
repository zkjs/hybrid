import AppComponent from './components/app';
import IndexComponent from './components/index';
import AboutComponent from './components/about';
import LoginComponent from './components/login';

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: IndexComponent
    },
    {
      path: '/web/about',
      component: AboutComponent
    },
    {
      path: '/web/login',
      component: LoginComponent

    }
        ]
}

export { routes };
