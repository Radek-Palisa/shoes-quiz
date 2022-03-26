import { sleep } from '../utils/sleep';

export async function getQuizResult(rating: [string, number][]) {
  await sleep(2000);

  // Assuming this logic would be on the server and we would fetch it.
  const sortedShoeIds = rating
    .sort((a, b) => b[1] - a[1])
    .map(([shoeId]) => shoeId);

  return sortedShoeIds;
}
