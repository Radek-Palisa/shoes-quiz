import { useQuery, useQueryClient } from 'react-query';
import { fetchQuizData } from '../api';

const QUERY_KEY = 'quizData';

export function useQuizData() {
  const { data } = useQuery(QUERY_KEY, fetchQuizData, {
    staleTime: 600_000,
    suspense: true,
  });

  // data are guaranteed to be defined because of the suspense
  const { shoes, questions } = data!;

  const shoesMap = new Map(shoes.map(({ id, ...shoe }) => [id, shoe]));

  return {
    shoes: shoesMap,
    questions,
  };
}

export function usePrefetchQuizQuestions() {
  const queryClient = useQueryClient();
  return () => queryClient.prefetchQuery(QUERY_KEY, fetchQuizData);
}
