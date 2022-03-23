import { Suspense, useState } from 'react';
import { QuizAnswer } from '../../services/types';
import Fade from '../../components/transitions/Fade/Fade';
import { getQuizResult } from '../../services/queries/quizResult';
import QuizResult from './scenes/QuizResult';
import { useQuizData } from '../../services/queries/quizData';
import QuizLoading from './components/QuizLoading/QuizLoading';
import QuizLayout from './components/QuizLayout/QuizLayout';
import Box from '../../components/Box/Box';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import Caption from '../../components/Caption/Caption';
import QuizFieldset from './components/QuizFieldset/QuizFieldset';

type QuizFormState = {
  currentQuestion: number;
  rating: Record<string, number>;
  isSubmitting: boolean;
  result: string[] | null;
};

const initialState = {
  currentQuestion: 0,
  rating: {},
  isSubmitting: false,
  result: null,
};

export function Quiz() {
  const { questions } = useQuizData();
  const [formState, setFormState] = useState<QuizFormState>(initialState);

  const handleSubmit = (finalRating: [string, number][]) => {
    getQuizResult(finalRating)
      .then((result) => {
        setFormState({ ...initialState, result });
      })
      .catch(() => {
        alert('Something went wrong, please try again later');
        setFormState(initialState);
      });
  };

  const handleAnswerClick = ({ nextQuestion, ratingIncrease }: QuizAnswer) => {
    const newRating: [string, number][] = Object.entries(ratingIncrease).map(
      ([shoeId, value]) => {
        return [shoeId, (formState.rating[shoeId] ?? 0) + value];
      }
    );

    const isFinalQuestion = nextQuestion === '';

    setFormState({
      currentQuestion: isFinalQuestion ? -1 : nextQuestion,
      rating: Object.fromEntries(newRating),
      isSubmitting: isFinalQuestion,
      result: null,
    });

    if (isFinalQuestion) {
      handleSubmit(newRating);
    }
  };

  if (formState.isSubmitting) {
    return (
      <QuizLoading
        caption={
          <Heading color="secondary" as="p" type="h4">
            We&apos;re running to get your results.
          </Heading>
        }
      />
    );
  }

  if (formState.result) {
    return <QuizResult result={formState.result} />;
  }

  return (
    <QuizLayout>
      <Box
        alignItems="center"
        padding={{ block: 'spaceMd', inline: 'spaceMd' }}
      >
        <Caption as="h1" color="inverted" align="center">
          Try on quiz
          <br />
          30 days risk free
        </Caption>
      </Box>
      <Box alignItems="center" justifyContent="center" position="relative">
        <form onSubmit={(e) => e.preventDefault()}>
          {questions.map((question) => {
            const isCurrentQuestion = question.id === formState.currentQuestion;

            return (
              <Fade key={question.id} isShown={isCurrentQuestion}>
                <QuizFieldset>
                  <Heading
                    as="legend"
                    type="h2"
                    color="inverted"
                    align="center"
                  >
                    {question.copy}
                  </Heading>
                  <Box as="ul" direction="row" justifyContent="center">
                    {question.answers.map((answer, index) => (
                      <Box as="li" key={`${question.id}-${index}`}>
                        <Button
                          color="inverted"
                          width="full"
                          onClick={() => handleAnswerClick(answer)}
                        >
                          {answer.copy}
                        </Button>
                      </Box>
                    ))}
                  </Box>
                </QuizFieldset>
              </Fade>
            );
          })}
        </form>
      </Box>
    </QuizLayout>
  );
}

export default function QuizSuspenseContainer() {
  return (
    <main>
      <Suspense fallback={<QuizLoading />}>
        <Quiz />
      </Suspense>
    </main>
  );
}
