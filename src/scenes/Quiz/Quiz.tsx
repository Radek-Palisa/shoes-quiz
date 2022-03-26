import { Suspense, useState } from 'react';
import { QuizAnswer, ShoesRating } from '../../services/types';
import Fade from '../../components/transitions/Fade/Fade';
import { getQuizResult } from '../../services/queries/quizResult';
import QuizResult from './scenes/QuizResult';
import { useQuizData } from '../../services/queries/quizData';
import QuizLoading from './components/QuizLoading/QuizLoading';
import QuizLayout from './components/QuizLayout/QuizLayout';
import Box from '../../components/Box/Box';
import Heading from '../../components/Heading/Heading';
import Caption from '../../components/Caption/Caption';
import QuizQuestion from './components/QuizQuestion/QuizQuestion';
import isCurrentQuestionTheLast from './services/isCurrentQuestionTheLast';

function increaseShoeRating(
  ratingIncrease: ShoesRating,
  currentRating: ShoesRating
) {
  return Object.fromEntries(
    Object.entries(ratingIncrease).map(([shoeId, value]) => [
      shoeId,
      (currentRating[shoeId] ?? 0) + value,
    ])
  );
}

type QuizFormState = {
  currentQuestion: number;
  rating: ShoesRating;
  isSubmitting: boolean;
  result: string[] | null;
};

const initialState = {
  currentQuestion: 0,
  rating: {},
  isSubmitting: false,
  result: null,
};

function Quiz() {
  const { questions } = useQuizData();
  const [formState, setFormState] = useState<QuizFormState>(initialState);

  const handleRestartQuiz = () => setFormState(initialState);

  const handleSubmit = async (finalRating: ShoesRating) => {
    try {
      const result = await getQuizResult(finalRating);
      setFormState({ ...initialState, result });
    } catch (e) {
      alert('Something went wrong, please try again later');
      setFormState(initialState);
    }
  };

  const handleAnswerClick = ({ nextQuestion, ratingIncrease }: QuizAnswer) => {
    const newRating = increaseShoeRating(ratingIncrease, formState.rating);
    const isLastQuestion = isCurrentQuestionTheLast(nextQuestion);

    setFormState({
      currentQuestion: isLastQuestion ? -1 : nextQuestion,
      rating: newRating,
      isSubmitting: isLastQuestion,
      result: null,
    });

    if (isLastQuestion) {
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
    return (
      <QuizResult result={formState.result} onRestartQuiz={handleRestartQuiz} />
    );
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
                <QuizQuestion
                  question={question}
                  onAnswerClick={handleAnswerClick}
                />
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
