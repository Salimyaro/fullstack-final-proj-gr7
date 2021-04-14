import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ResultsChart from '../components/PieChart';
import AnswersContext from '../contexts/answers/context';
import AuthContext from '../contexts/auth/context';
import cat from '../img/cat.png';
import catSmall from '../img/cat_120px.png';
import s from './ResultsView.module.css';

export default function Results() {
  const { userAnswers } = useContext(AnswersContext);
  const { fetchResults } = useContext(AuthContext);
  const [results, setResults] = useState(null);
  const location = useLocation();
  const testType = new URLSearchParams(location.search).get('type');

  const answers = { answers: userAnswers };
  console.log('UserAnswers: ', userAnswers);
  const testingLabel =
    testType === 'tech' ? 'QA technical training' : 'Testing theory';

  useEffect(() => {
    fetchResults(answers, testType).then(res => setResults(res));
    // eslint-disable-next-line
  }, []);

  const correctAnswers = results
    ? Math.floor((results.data.result * 100) / 12)
    : null;

  return results ? (
    <div className={s.container}>
      <h2 className={s.heading}>Results</h2>
      <p className={s.testTitle}>[{testingLabel.toUpperCase()}_]</p>
      <div className={s.lineBreak}></div>
      <ResultsChart
        correctAnswers={correctAnswers}
        incorrectAnswers={100 - correctAnswers}
      />
      <div className={s.resultsBar}>
        <span>
          Correct answers - <b>{results.data.result}</b>
        </span>
        <span className={s.breaker}>|</span>
        <span>
          Total questions - <b>12</b>
        </span>
      </div>

      <img
        className={s.catImage}
        src={window.innerWidth <= 320 ? catSmall : cat}
        alt="Котик"
      />

      <h2 className={s.heading}>{results.data.mainMessage}</h2>
      <p className={s.resultsMessage}>{results.data.secondaryMessage}</p>
      <Link className={s.button} to={`/test?type=${testType}`}>
        Try again
      </Link>
    </div>
  ) : (
    <div>Oops, sorry, you need to pass a test to see your results!</div>
  );
}
