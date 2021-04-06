import cat from '../img/cat.png';
import { Link } from 'react-router-dom';
import s from './ResultsView.module.css';

export default function Results() {
  // Будет заменен на данные, получаемые от бекенда в резултате POST запроса
  const mockTestResults = {
    test: 'Testing Theory',
    result: 92,
    mainMessage: 'Great!',
    secondaryMessage: 'You have very strong tech knowledge',
  };

  return (
    <div className={s.container}>
      <h2 className={s.heading}>Results</h2>
      <p className={s.testTitle}>[{mockTestResults.test.toUpperCase()}_]</p>
      <div className={s.lineBreak}></div>
      <div className={s.diagram}></div>
      <div className={s.resultsBar}>
        <span>
          Correct answers - <b>{mockTestResults.result}</b>
        </span>
        <span className={s.breaker}>|</span>
        <span>
          Total questions - <b>12</b>
        </span>
      </div>
      <img className={s.catImage} src={cat} alt="cat" />
      <h2 className={s.heading}>{mockTestResults.mainMessage}</h2>
      <p className={s.resultsMessage}>{mockTestResults.secondaryMessage}</p>
      <Link className={s.button} to={`/test`}>
        Try again
      </Link>
    </div>
  );
}
