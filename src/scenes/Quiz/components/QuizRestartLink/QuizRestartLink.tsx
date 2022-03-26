import style from './QuizRestartLink.module.css';

type Props = {
  onClick: () => void;
};

export default function QuizRestartLink({ onClick }: Props) {
  return (
    <button type="button" onClick={onClick} className={style.root}>
      Restart quiz
    </button>
  );
}
