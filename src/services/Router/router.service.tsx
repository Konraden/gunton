import { Router } from '@remix-run/router';
import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import SecretViewer from '../../pages/SecretViewer/SecretViewer';
import VaultViewer from '../../pages/VaultViewer/VaultViewer';
import { API } from '../DataService/api.data.service';

export const routerConfig = [
  {
    path: '/',
    element: <Home />,
    loader: async () => await API.GET('/vaults'),
    errorElement: <div>Some Error</div>,
    children: []
  },
  {
    path: '/vault/:vaultId',
    element: <VaultViewer />,
    children: [
      {
        path: 'team',
        element: <SecretViewer />,
        loader: async () => await API.GET('/vault/:vaultId/secret/:secretId')
      }
    ]
  }
];

let browserRouter: Router;
let memoryRouter: Router;
export class appRouter {
  static browserRouter() {
    return browserRouter ?? (browserRouter = createBrowserRouter(routerConfig));
  }

  static memoryRouter() {
    return memoryRouter ?? (memoryRouter = createMemoryRouter(routerConfig));
  }
}
