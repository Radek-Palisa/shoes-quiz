import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import { Routes, useRouter } from '../../components/Router';
import Text from '../../components/Text/Text';
import { usePrefetchQuizQuestions } from '../../services/queries/quizData';
import HomeBackground from './components/HomeBackground/HomeBackground';

export default function Home() {
  const [, setRoute] = useRouter();
  const prefetchQuizQuestions = usePrefetchQuizQuestions();

  return (
    <main>
      <HomeBackground>
        <Box padding={{ inline: 'spaceLg' }}>
          <Heading>
            Take the quiz
            <br />
            and try your first pair!
          </Heading>
          <Button
            width="min"
            onClick={() => setRoute(Routes.Quiz)}
            onMouseOver={prefetchQuizQuestions}
          >
            Try On Trial
          </Button>
          <Text type="small" color="secondary">
            30 Days risk free
          </Text>
        </Box>
      </HomeBackground>
    </main>
  );
}
