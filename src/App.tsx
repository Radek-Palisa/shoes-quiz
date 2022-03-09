import Quiz from './scenes/Quiz/Quiz';
import AppHeader from './components/AppHeader/AppHeader';
import { Routes, useRouter } from './components/Router';
import Home from './scenes/Home/Home';
import AppLayout from './components/AppLayout/AppLayout';

export default function App() {
  const [route] = useRouter();

  return (
    <AppLayout>
      <AppHeader />
      {route === Routes.Home && <Home />}
      {route === Routes.Quiz && <Quiz />}
    </AppLayout>
  );
}
