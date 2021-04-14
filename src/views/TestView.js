import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Questions from '../components/Questions';
import AnswersContext from '../contexts/answers/context';
import AuthContext from '../contexts/auth/context';
import arrowbl from '../img/arrow-bl.svg';
import arrowbr from '../img/arrow-br.svg';
import s from './TestView.module.css';

export default function Test() {
  const [loding, setLoading] = useState(false);
  const { getTest } = useContext(AuthContext);
  const { userAnswers, setUserAnswers, handleAnswerTest } = useContext(
    AnswersContext,
  );

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testType]);

  const activeQuestionData = questions[activeQuestionId];

  const isUserAnsvered = userAnswers.find(userAnswer => {
    return userAnswer?.questionId === activeQuestionData?.questionId;
  });

  const handleNextQuestion = () => {
    setActiveQuestionId(activeQuestionId + 1);
  };

  const handlePrevQuestion = () => {
    setActiveQuestionId(activeQuestionId - 1);
  };

  const testingLabel =
    testType === 'tech' ? 'QA technical training' : 'Testing theory';

  useEffect(() => {
    setUserAnswers([]);
  }, [setUserAnswers]);

  if (!activeQuestionData) {
    return null;
  }

  const submitAnswers = () => {
    history.push(`/results?type=${testType}`);
  };

  const isActive = !isUserAnsvered ? `${s.nextButtonActiv}` : `${s.nextButton}`;

  return (
    <div className={s.buttonContainer}>
      <div className={s.finishContainer}>
        <p className={s.title}>[ {testingLabel}&#95; ]</p>
        <Link to="/">
          <button className={s.buttonFinish}>
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
        defaultValue={isUserAnsvered?.answer}
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
          <button
            disabled={!isUserAnsvered}
            className={isActive}
            onClick={submitAnswers}
          >
            <span className={s.submitName}>Submit</span>
          </button>
        ) : (
          <button
            disabled={!isUserAnsvered}
            onClick={handleNextQuestion}
            className={isActive}
          >
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
