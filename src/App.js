import Navbar from './components/menu/Navbar'
import Sidebar from './components/menu/Sidebar'

import useMediaQuery from '@material-ui/core/useMediaQuery';

function App() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div className="App">
      {matches ? <Sidebar /> : <Navbar />}
    </div>
  );
}

export default App;
