import { useQuery, useQueryClient } from 'react-query';
import { fetchQuizData } from '../api';

const QUERY_KEY = 'quizData';

const shoeIdToImageUrl: Record<string, string> = {
  cloud: '/assets/Cloud.png',
  cloudx: '/assets/Cloud X.png',
  cloudflow: '/assets/Cloudflow.png',
  cloudventure: '/assets/Cloudventure.png',
  cloudsurfer: '/assets/Cloudsurfer.png',
  cloudventure_waterproof: '/assets/Cloudventure Waterproof.png',
  cloudventure_peak: '/assets/Cloudventure Peak.png',
  cloudflyer: '/assets/Cloudflyer.png',
};

export function useQuizData() {
  const { data } = useQuery(QUERY_KEY, fetchQuizData, {
    staleTime: 600_000,
    suspense: true,
  });

  // data are guaranteed to be defined because of the suspense
  const { shoes, questions } = data!;

  const shoesMap = new Map(
    shoes.map(({ id, ...shoe }) => {
      return [
        id,
        {
          ...shoe,
          imageUrl: shoeIdToImageUrl[id],
        },
      ];
    })
  );

  return {
    shoes: shoesMap,
    questions,
  };
}

export function usePrefetchQuizQuestions() {
  const queryClient = useQueryClient();
  return () => queryClient.prefetchQuery(QUERY_KEY, fetchQuizData);
}
