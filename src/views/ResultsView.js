import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ResultsChart from '../components/PieChart';
import AnswersContext from '../contexts/answers/context';
import AuthContext from '../contexts/auth/context';
import cat from '../img/cat.png';
import s from './ResultsView.module.css';

export default function Results() {
  const { userAnswers } = useContext(AnswersContext);
  const { fetchResults } = useContext(AuthContext);
  const [results, setResults] = useState(null);
  const location = useLocation();
  const testType = new URLSearchParams(location.search).get('type');

  const answers = { answers: userAnswers };

  const testingLabel =
    testType === 'tech' ? 'QA technical training' : 'Testing theory';

  useEffect(() => {
    fetchResults(answers, testType).then(res => setResults(res));
    // eslint-disable-next-line
  }, []);

  const correctAnswers = results
    ? Math.floor((12 * results.data.result) / 100)
    : null;

  return (
    results && (
      <div className={s.container}>
        <h2 className={s.heading}>Results</h2>
        <p className={s.testTitle}>[{testingLabel.toUpperCase()}_]</p>
        <div className={s.lineBreak}></div>
        <ResultsChart
          correctAnswers={results.data.result}
          incorrectAnswers={100 - results.data.result}
        />
        <div className={s.resultsBar}>
          <span>
            Correct answers - <b>{correctAnswers}</b>
          </span>
          <span className={s.breaker}>|</span>
          <span>
            Total questions - <b>12</b>
          </span>
        </div>
        <img className={s.catImage} src={cat} alt="cat" />
        <h2 className={s.heading}>{results.data.mainMessage}</h2>
        <p className={s.resultsMessage}>{results.data.secondaryMessage}</p>
        <Link className={s.button} to={`/test?type=${testType}`}>
          Try again
        </Link>
      </div>
    )
  );
}
