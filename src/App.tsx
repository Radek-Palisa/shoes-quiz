import './App.css';
import Quiz from './scenes/Quiz/Quiz';
import AppHeader from './components/AppHeader';

export default function App() {
  return (
    <div className="App">
      <AppHeader />
      <Quiz />
    </div>
  );
}
