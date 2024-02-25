import './App.css';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from '../../services/Router/router.service';

function App() {
  const router = appRouter.browserRouter();

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
