import { useQuizData } from '../../../services/queries/quizData';

type Props = {
  result: string[];
};

export default function QuizResult({
  result: [winner, ...similarProfiles],
}: Props) {
  const { shoes } = useQuizData();

  const winnerShoe = shoes.get(winner);

  return (
    <main>
      <h1>Congratulations</h1>
      <p>Winner: {winnerShoe?.name}</p>
      <h2>Similar Profiles</h2>
      <ul>
        {similarProfiles.map((shoeId) => {
          const shoe = shoes.get(shoeId);
          return (
            <li key={shoeId}>
              <p>{shoe?.name}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
