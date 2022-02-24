import './App.css';
import Quiz from './scenes/Quiz/Quiz';
import AppHeader from './components/AppHeader';
import { Routes, useRouter } from './components/Router';
import Home from './scenes/Home/Home';

export default function App() {
  const [route] = useRouter();

  return (
    <div className="App">
      <AppHeader />
      {route === Routes.Home && <Home />}
      {route === Routes.Quiz && <Quiz />}
    </div>
  );
}
