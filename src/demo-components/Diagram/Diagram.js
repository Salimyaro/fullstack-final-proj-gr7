import { blue } from '@material-ui/core/colors';
import { Pie, defaults } from 'react-chartjs-2';

export default function Diagram({ rightAnswers, wrongAnswers }) {
  const data = {
    labels: [`${rightAnswers}% Correct`, `${wrongAnswers}% Incorrect`],
    datasets: [
      {
        data: [rightAnswers, wrongAnswers],
        backgroundColor: ['#FF6B01', '#D7D7D7'],
      },
    ],
  };

  return (
    <div>
      <Pie
        data={data}
        width={285}
        height={285}
        options={{
          maintainAspectRatio: false,
          rotation: 0,
          animation: {
            animateRotate: false,
          },
          legend: {
            display: false,
            labels: {
              boxWidth: 25,
              boxHeight: 25,
              fontFamily: 'Montserrat',
              fontSize: 16,
            },
          },
          tooltips: {
            bodyFontFamily: 'Montserrat',
            bodyFontSize: 16,
            xPadding: 10,
            backgroundColor: '#fff',
            bodyFontColor: '#000',
          },
        }}
      />
    </div>
  );
}
