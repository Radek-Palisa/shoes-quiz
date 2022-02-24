import { Routes, useRouter } from '../../components/Router';

export default function Home() {
  const [, setRoute] = useRouter();

  return (
    <main>
      <h1>Home</h1>
      <button onClick={() => setRoute(Routes.Quiz)}>Try on trial</button>
    </main>
  );
}
