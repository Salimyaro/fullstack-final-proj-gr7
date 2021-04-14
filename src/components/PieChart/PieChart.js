import { PieChart } from 'react-minimal-pie-chart';
import s from './ResultsChart.module.css';

export default function ResultsChart({ correctAnswers, incorrectAnswers }) {
  const data = [
    { title: 'Correct', value: correctAnswers, color: '#FF6B01' },
    { title: 'Incorrect', value: incorrectAnswers, color: '#D7D7D7' },
  ];

  return (
    <div className={s.chart}>
      <PieChart data={data} />
      {correctAnswers > 0 && (
        <div className={s.labelCorrect}>
          <div className={s.labelArrow}></div>
          <div className={s.colorBoxCorrect}></div>
          <div className={s.labelText}>{correctAnswers}% Correct</div>
        </div>
      )}
      {correctAnswers < 100 && (
        <div className={s.labelIncorrect}>
          <div className={s.labelArrow}></div>
          <div className={s.colorBoxIncorrect}></div>
          <div className={s.labelText}>{incorrectAnswers}% Incorrect</div>
        </div>
      )}
    </div>
  );
}
