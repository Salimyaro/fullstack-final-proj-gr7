import { PieChart } from 'react-minimal-pie-chart';
import s from './ResultsChart.module.css';

export default function ResultsChart({ correctAnswers, incorrectAnswers }) {
  const data = [
    { title: 'Correct', value: correctAnswers, color: '#FF6B01' },
    { title: 'Correct', value: incorrectAnswers, color: '#D7D7D7' },
  ];

  return (
    <div className={s.chart}>
      <PieChart data={data} />
    </div>
  );
}
