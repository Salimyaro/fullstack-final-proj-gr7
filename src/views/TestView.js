import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Questions from '../components/Questions';
import s from './TestView.module.css';
import { getTest } from '../service/user-api';
import arrowbr from '../img/arrow-br.svg';
import arrowbl from '../img/arrow-bl.svg';
import AnswersContext from '../contexts/answers/context';

export default function Test() {
  const { setUserAnswers, handleAnswerTest } = useContext(AnswersContext);
  const [loding, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [activeQuestionId, setActiveQuestionId] = useState(0);

  const history = useHistory();

  const query = useLocation().search;
  const search = new URLSearchParams(query);
  const testType = search.get('type');

  useEffect(() => {
    setLoading(true);
    getTest(testType).then(({ data }) => setQuestions(data.tests));
    setLoading(false);
  }, [testType]);

  const activeQuestionData = questions[activeQuestionId];

  const handleNextQuestion = () => {
    setActiveQuestionId(activeQuestionId + 1);
  };

  const handlePrevQuestion = () => {
    setActiveQuestionId(activeQuestionId - 1);
  };

  const testingLabel =
    testType === 'tech' ? 'QA technical training' : 'Testing theory';

  function reset() {
    setUserAnswers([]);
  }

  useEffect(() => {
    setUserAnswers([]);
  }, [setUserAnswers]);

  if (!activeQuestionData) {
    return null;
  }

  const submitAnswers = () => {
    history.push('/results');
  };

  return (
    <div className={s.buttonContainer}>
      <div className={s.finishContainer}>
        <p className={s.title}>[ {testingLabel}&#95; ]</p>
        <Link to="/" exact>
          <button className={s.buttonFinish} onClick={reset}>
            <span className={s.buttonName}>Cancel test</span>
          </button>
        </Link>
      </div>
      <Questions
        questionId={activeQuestionData.questionId}
        currentQuestionIndex={activeQuestionId + 1}
        totalQuestionsCalc={questions.length}
        title={activeQuestionData.question}
        answers={activeQuestionData.answers}
        onAnswerChange={handleAnswerTest}
      />
      <div className={s.nextPrevContainer}>
        {activeQuestionId !== 0 && (
          <button onClick={handlePrevQuestion} className={s.prevButton}>
            <img
              className={s.arrowLeft}
              src={arrowbl}
              alt="arrow"
              width="24"
              height="16"
            />
            <span className={s.prevName}>Previous question</span>
          </button>
        )}
        {activeQuestionId === 11 ? (
          <button className={s.nextButton} onClick={submitAnswers}>
            <span className={s.submitName}>Submit</span>
          </button>
        ) : (
          <button onClick={handleNextQuestion} className={s.nextButton}>
            <span className={s.nextName}>Next question</span>
            <img
              className={s.arrowRight}
              src={arrowbr}
              alt="arrow"
              width="24"
              height="16"
            />
          </button>
        )}
      </div>
    </div>
  );
}
