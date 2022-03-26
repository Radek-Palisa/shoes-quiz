import Box from '../../../components/Box/Box';
import Button from '../../../components/Button/Button';
import Heading from '../../../components/Heading/Heading';
import ProductCard from '../../../components/ProductCard/ProductCard';
import Text from '../../../components/Text/Text';
import { useQuizData } from '../../../services/queries/quizData';
import QuizRestartLink from '../components/QuizRestartLink/QuizRestartLink';

type Props = {
  result: string[];
  onRestartQuiz: () => void;
};

export default function QuizResult({
  result: [winner, ...similarProfiles],
  onRestartQuiz,
}: Props) {
  const { shoes } = useQuizData();

  const winnerShoe = shoes.get(winner);

  return (
    <main>
      <Box
        padding={{ inline: 'spaceMd', block: 'spaceLg' }}
        alignItems="stretch"
      >
        <Box padding={{ inline: 'spaceLg', block: 'spaceLg' }}>
          <Heading>Congratulations!</Heading>
          <Text color="secondary">
            Based on your selection we&apos;ve decided on {winnerShoe?.name}!
            Enjoy the 30 day trial!
          </Text>
        </Box>
        <div>
          <ProductCard
            image={
              <img
                src={`${process.env.PUBLIC_URL}${winnerShoe?.imageUrl}`}
                alt={winnerShoe?.name}
              />
            }
            title={winnerShoe?.name}
            description="Your perfect partner in the world's fully-cushioned shoe for Running Remixed."
            price="200 CHF"
            productColor="Neon Grey"
          />
          <Box padding={{ inline: 'spaceLg', block: 'spaceLg' }}>
            <Button color="secondary" width="full" onClick={() => {}}>
              Show now
            </Button>
          </Box>
        </div>
        <section>
          <Box padding={{ inline: 'spaceLg', block: 'spaceLg' }}>
            <Heading as="h2">Similar Profiles</Heading>
          </Box>
          <ul>
            {similarProfiles.map((shoeId) => {
              const shoe = shoes.get(shoeId);
              return (
                <li key={shoeId}>
                  <ProductCard
                    image={
                      <img
                        src={`${process.env.PUBLIC_URL}${shoe?.imageUrl}`}
                        alt={winnerShoe?.name}
                      />
                    }
                    title={shoe?.name}
                    description="Your perfect partner in the world's fully-cushioned shoe for Running Remixed."
                    price="200 CHF"
                    productColor="Neon Grey"
                  />
                  <Box padding={{ inline: 'spaceLg', block: 'spaceLg' }}>
                    <Button color="secondary" width="full" onClick={() => {}}>
                      Show now
                    </Button>
                  </Box>
                </li>
              );
            })}
          </ul>
          <Box alignItems="center">
            <QuizRestartLink onClick={onRestartQuiz} />
          </Box>
        </section>
      </Box>
    </main>
  );
}
