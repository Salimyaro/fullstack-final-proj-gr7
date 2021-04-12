import React, { useEffect, useState } from 'react';
import s from './Questions.module.css';

export default function Questions({
  currentQuestionIndex,
  totalQuestionsCalc,
  title,
  answers,
  onAnswerChange,
  questionId,
  defaultValue,
}) {
  const [value, setValue] = useState('');

  const handleChange = answer => () => {
    setValue(answer);
    onAnswerChange({ answer, questionId });
  };

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    } else {
      setValue('');
    }
  }, [questionId, defaultValue]);

  return (
    <form className={s.questionsContainer}>
      <div className={s.questionsHeader}>
        <p className={s.questionIndex}>
          Question
          <span className={s.currentIndex}>{currentQuestionIndex}</span>&#47;
          {totalQuestionsCalc}
        </p>
        <p className={s.questionTitle}>{title}</p>
      </div>
      <ul className={s.questionsBody}>
        {answers.map((answer, index) => {
          return (
            <li className={s.item} key={index}>
              <input
                checked={value === answer}
                value={value}
                onChange={handleChange(answer)}
                type="radio"
                name="answers"
                id={index}
              />
              <label htmlFor={index}>
                <p className={s.question}>{answer}</p>
              </label>
            </li>
          );
        })}
      </ul>
    </form>
  );
}
