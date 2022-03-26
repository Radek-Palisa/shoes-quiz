export type ShoesRating = Record<string, number>;

export type QuizAnswer = {
  id: number;
  copy: string;
  /** empty string means the quiz is finished */
  nextQuestion: number | '';
  ratingIncrease: ShoesRating;
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
