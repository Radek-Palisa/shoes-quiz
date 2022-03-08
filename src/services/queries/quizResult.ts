import { sleep } from '../utils/sleep';

export async function getQuizResult(rating: [string, number][]) {
  await sleep(2000);

  const sortedShoeIds = rating
    .sort((a, b) => b[1] - a[1])
    .map(([shoeId]) => shoeId);

  return sortedShoeIds;
}
