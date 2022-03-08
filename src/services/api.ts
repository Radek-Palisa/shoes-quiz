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

export async function fetchQuizData() {
  await sleep(200);
  return fetch<{ questions: QuizQuestion[]; shoes: QuizShoe[] }>(API_ENDPOINT);
}
