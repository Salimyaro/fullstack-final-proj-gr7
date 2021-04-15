import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ResultsChart from '../components/PieChart';
import AuthContext from '../contexts/auth/context';
import cat from '../img/cat.png';
import catSmall from '../img/cat_120px.png';
import s from './ResultsView.module.css';

export default function Results() {
  const { fetchResults, setLoading } = useContext(AuthContext);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const testType = new URLSearchParams(location.search).get('type');

  const answers = {
    answers: JSON.parse(localStorage.getItem('answers')),
  };

  const testingLabel =
    testType === 'tech' ? 'QA technical training' : 'Testing theory';

  const handleNavLink = () => {
    setLoading(true);
  };

  useEffect(() => {
    fetchResults(answers, testType)
      .then(res => {
        setResults(res);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
    // eslint-disable-next-line
  }, []);

  const correctAnswers = results
    ? Math.floor((results.data.result * 100) / 12)
    : null;
  return (
    <>
      {results && (
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
          <Link
            className={s.button}
            to={`/test?type=${testType}`}
            onClick={handleNavLink}
          >
            Try again
          </Link>
        </div>
      )}
      {error && <div>{error}</div>}
    </>
  );
}
