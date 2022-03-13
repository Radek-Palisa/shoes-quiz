import { Routes, useRouter } from '../../components/Router';
import HomeBackground from './components/HomeBackground/HomeBackground';

export default function Home() {
  const [, setRoute] = useRouter();

  return (
    <main>
      <HomeBackground>
        <div>
          <h1>
            Take the quiz
            <br />
            and try your first pair
          </h1>
          <button onClick={() => setRoute(Routes.Quiz)}>Try on Trial</button>
          <p>30 Days risk free</p>
        </div>
      </HomeBackground>
    </main>
  );
}
