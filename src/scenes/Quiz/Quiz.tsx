import { Suspense, useState } from 'react';
import { QuizAnswer } from '../../services/types';
import Fade from '../../components/transitions/Fade';
import { getQuizResult } from '../../services/queries/quizResult';
import QuizResult from './scenes/QuizResult';
import { useQuizData } from '../../services/queries/quizData';
import QuizLoading from './scenes/QuizLoading';

type QuizFormState = {
  currentQuestion: number;
  rating: Record<string, number>;
  submitting: boolean;
  result: string[] | null;
};

const initialState = {
  currentQuestion: 0,
  rating: {},
  submitting: false,
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
      submitting: isFinalQuestion,
      result: null,
    });

    if (isFinalQuestion) {
      handleSubmit(newRating);
    }
  };

  if (formState.submitting) {
    return <QuizLoading />;
  }

  if (formState.result) {
    return <QuizResult result={formState.result} />;
  }

  return (
    <main>
      <h1>
        Try on quiz
        <br />
        30 days risk free
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {questions.map((question) => {
          const isCurrentQuestion = question.id === formState.currentQuestion;

          return (
            <Fade key={question.id} isShown={isCurrentQuestion}>
              <fieldset>
                <legend>{question.copy}</legend>
                <ul>
                  {question.answers.map((answer, index) => (
                    <li key={`${question.id}-${index}`}>
                      <button
                        type="button"
                        onClick={() => handleAnswerClick(answer)}
                      >
                        {answer.copy}
                      </button>
                    </li>
                  ))}
                </ul>
              </fieldset>
            </Fade>
          );
        })}
      </form>
    </main>
  );
}

export default function QuizSuspenseContainer() {
  return (
    <Suspense fallback={<QuizLoading />}>
      <Quiz />
    </Suspense>
  );
}
