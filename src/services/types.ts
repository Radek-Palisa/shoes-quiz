type ShoeId =
  | 'cloud'
  | 'cloudflow'
  | 'cloudflyer'
  | 'cloudsurfer'
  | 'cloudventure'
  | 'cloudventure_peak'
  | 'cloudventure_waterproof'
  | 'cloudx';

type QuizAnswer = {
  id: number;
  copy: string;
  /** empty string means the quiz is finished */
  nextQuestion: number | '';
  ratingIncrease: Record<ShoeId, number>;
};

export type QuizQuestion = {
  id: number;
  copy: string;
  answers: QuizAnswer[];
};

export type QuizShoe = {
  id: ShoeId;
  name: string;
  rating: number;
};
