import { QuizQuestion, QuizShoe } from './types';
import { sleep } from './utils/sleep';

const API_ENDPOINT = '/api/data.json';

function fetch<T>(requestInfo: RequestInfo): Promise<T> {
  return window.fetch(requestInfo).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export async function fetchQuizQuestions(): Promise<QuizQuestion[]> {
  await sleep(200);
  const { questions } = await fetch<{ questions: QuizQuestion[] }>(
    API_ENDPOINT
  );
  return questions;
}

export async function fetchQuizShoes(): Promise<QuizShoe[]> {
  await sleep(400);
  const { shoes } = await fetch<{ shoes: QuizShoe[] }>(API_ENDPOINT);
  return shoes;
}
