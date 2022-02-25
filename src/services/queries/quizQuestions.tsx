import { useQuery, useQueryClient } from 'react-query';
import { fetchQuizQuestions } from '../api';

const QUERY_KEY = 'quizQuestions';

export function useQuizQuestions() {
  return useQuery(QUERY_KEY, fetchQuizQuestions, { staleTime: 600_000 });
}

export function usePrefetchQuizQuestions() {
  const queryClient = useQueryClient();
  return () => queryClient.prefetchQuery(QUERY_KEY, fetchQuizQuestions);
}
