export type QuizAnswer = {
  id: number;
  copy: string;
  /** empty string means the quiz is finished */
  nextQuestion: number | '';
  ratingIncrease: Record<string, number>;
};

export type QuizQuestion = {
  id: number;
  copy: string;
  answers: QuizAnswer[];
};

export type QuizShoe = {
  id: string;
  name: string;
  rating: number;
};
