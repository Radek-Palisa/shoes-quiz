import { Routes, useRouter } from '../../components/Router';

export default function Home() {
  const [, setRoute] = useRouter();

  return (
    <main>
      <h1>Take the quiz and try your first pair</h1>
      <button onClick={() => setRoute(Routes.Quiz)}>Try on Trial</button>
      <p>30 Days risk free</p>
    </main>
  );
}
