import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Home/Home';
import { API } from '../../services/DataService/api.data.service';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      loader: async () => await API.GET('/localData')
      // children: [
      //   {
      //     path: "team",
      //     element: <Team />,
      //     loader: teamLoader,
      //   },
      // ],
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
