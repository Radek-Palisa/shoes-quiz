import { QuizQuestion, QuizShoe } from './types';
import { sleep } from './utils/sleep';

const API_ENDPOINT = '/api/data.json';

export async function fetchQuizQuestions(): Promise<QuizQuestion[]> {
  await sleep(200);
  return fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((res) => res.questions);
}

export async function fetchQuizShoes(): Promise<QuizShoe[]> {
  await sleep(400);
  return fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((res) => res.shoes);
}
