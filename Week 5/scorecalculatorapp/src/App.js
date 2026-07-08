import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        name="Gayathri"
        school="ABC Higher Secondary School"
        total={480}
        goal={6}
      />
    </div>
  );
}

export default App;