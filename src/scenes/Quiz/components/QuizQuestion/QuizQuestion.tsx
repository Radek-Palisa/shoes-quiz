import Box from '../../../../components/Box/Box';
import Button from '../../../../components/Button/Button';
import Heading from '../../../../components/Heading/Heading';
import {
  QuizAnswer,
  QuizQuestion as QuizQuestionType,
} from '../../../../services/types';
import isCurrentQuestionTheLast from '../../services/isCurrentQuestionTheLast';
import styles from './QuizQuestion.module.css';

type Props = {
  question: QuizQuestionType;
  onAnswerClick: (answer: QuizAnswer) => void;
};

export default function QuizQuestion({ question, onAnswerClick }: Props) {
  return (
    // nested div needed because applying flexbox to a fieldset directly
    // doesn't work
    <fieldset>
      <div className={styles.root}>
        <Heading as="legend" type="h2" color="inverted" align="center">
          {question.copy}
        </Heading>
        <Box as="ul" direction="row" justifyContent="center">
          {question.answers.map((answer, index) => (
            <Box as="li" key={`${question.id}-${index}`}>
              <Button
                buttonType={
                  isCurrentQuestionTheLast(answer.nextQuestion)
                    ? 'submit'
                    : 'button'
                }
                color="inverted"
                width="full"
                onClick={() => onAnswerClick(answer)}
              >
                {answer.copy}
              </Button>
            </Box>
          ))}
        </Box>
      </div>
    </fieldset>
  );
}
