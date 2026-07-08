import './App.css';

import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {

  const flag = false;

  if (flag) {

    return (
      <div>
        <ListofPlayers />
      </div>
    );

  }

  else {

    return (
      <div>
        <IndianPlayers />
      </div>
    );

  }

}

export default App;
