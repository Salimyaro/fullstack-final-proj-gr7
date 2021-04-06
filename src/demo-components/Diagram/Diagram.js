import { Pie } from 'react-chartjs-2';
export default function Diagram({ rightAnswers, wrongAnswers }) {
  const data = {
    labels: ['Correct', 'Incorrect'],
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
        }}
      />
    </div>
  );
}
