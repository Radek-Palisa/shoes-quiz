import Heading from '../../components/Heading/Heading';
import { Routes, useRouter } from '../../components/Router';
import HomeBackground from './components/HomeBackground/HomeBackground';

export default function Home() {
  const [, setRoute] = useRouter();

  return (
    <main>
      <HomeBackground>
        <div>
          <Heading>
            Take the quiz
            <br />
            and try your first pair!
          </Heading>
          <button onClick={() => setRoute(Routes.Quiz)}>Try on Trial</button>
          <p>30 Days risk free</p>
        </div>
      </HomeBackground>
    </main>
  );
}
