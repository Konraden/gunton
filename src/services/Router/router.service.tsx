import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import SecretViewer from '../../pages/SecretViewer/SecretViewer';
import VaultViewer from '../../pages/VaultViewer/VaultViewer';
import { API } from '../DataService/api.data.service';

export class appRouter {
  static create() {
    return createBrowserRouter([
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
        loader: async ({ params }) => await API.GET(`/vault/${params.vaultId}`),
        children: [
          {
            path: 'team',
            element: <SecretViewer />,
            loader: async () =>
              await API.GET('/vault/:vaultId/secret/:secretId')
          }
        ]
      }
    ]);
  }
}
