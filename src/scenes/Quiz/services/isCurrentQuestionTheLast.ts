// This could be easily inlined but it's probably a good idea
// to try to keep business logic like this out of the components.
export default function isCurrentQuestionTheLast(
  nextQuestionId: number | ''
): nextQuestionId is '' {
  return nextQuestionId === '';
}
