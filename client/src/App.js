import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import Result from './components/Result';
import Quiz from './components/Quiz';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/quiz',
    element: <Quiz/>   
  },
  {
    path: '/result',
    element: <Result/>   
  }
])


function App() {
  return (
    <div className="App">
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
