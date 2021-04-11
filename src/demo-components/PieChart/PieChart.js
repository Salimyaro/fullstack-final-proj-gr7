import { PieChart } from 'react-minimal-pie-chart';
import s from './ResultsChart.module.css';

export default function ResultsChart({ correctAnswers, incorrectAnswers }) {
  const data = [
    { title: 'Correct', value: correctAnswers, color: '#FF6B01' },
    { title: 'Correct', value: incorrectAnswers, color: '#D7D7D7' },
  ];

  //   const Label = props => {
  //     return (
  //       <>
  //         <svg
  //           width="128"
  //           height="13"
  //           viewBox="0 0 128 13"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path opacity="0.5" d="M128 1H18L0.5 12.5" stroke="black" />
  //           <rect width="25" height="25" fill={props.color} />
  //         </svg>
  //       </>
  //     );
  //   };

  return (
    <div className={s.chart}>
      <PieChart
        data={data}
        // label={({ dataEntry }) => <Label {...dataEntry} />}
      />
    </div>
  );
}
