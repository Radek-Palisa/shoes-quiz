import { sleep } from '../utils/sleep';

export async function getQuizResult(rating: Record<string, number>) {
  await sleep(2000);

  // Assuming this logic would be on the server and we would need to fetch it.
  const sortedShoeIds = Object.entries(rating)
    .sort((a, b) => b[1] - a[1])
    .map(([shoeId]) => shoeId);

  return sortedShoeIds;
}
