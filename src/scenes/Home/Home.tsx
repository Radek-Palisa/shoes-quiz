import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import { Routes, useRouter } from '../../components/Router';
import HomeBackground from './components/HomeBackground/HomeBackground';

export default function Home() {
  const [, setRoute] = useRouter();

  return (
    <main>
      <HomeBackground>
        <Box padding={{ inline: 'spaceMd' }}>
          <Heading>
            Take the quiz
            <br />
            and try your first pair!
          </Heading>
          <Button width="min" onClick={() => setRoute(Routes.Quiz)}>
            Try On Trial
          </Button>
          <p>30 Days risk free</p>
        </Box>
      </HomeBackground>
    </main>
  );
}
