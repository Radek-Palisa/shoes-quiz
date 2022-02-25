import { useQuery } from 'react-query';
import { fetchQuizShoes } from '../api';

const QUERY_KEY = 'quizShoes';

export function useQuizShoes() {
  return useQuery(QUERY_KEY, fetchQuizShoes, { staleTime: 600_000 });
}
