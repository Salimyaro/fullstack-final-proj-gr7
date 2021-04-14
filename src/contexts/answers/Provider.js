import { useState } from 'react';
import AnswersContext from './context';

const AnswersProvider = ({ children }) => {
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerTest = data => {
    const isAnswerSet = userAnswers.find(
      answer => answer.questionId === data.questionId,
    );

    if (isAnswerSet) {
      setUserAnswers(prevState =>
        prevState.map(el => {
          if (el.questionId === isAnswerSet.questionId) {
            return {
              ...el,
              answer: data.answer,
            };
          }
          return el;
        }),
      );
    } else {
      setUserAnswers(prevState => [...prevState, data]);
    }

    console.log(userAnswers);
  };

  return (
    <AnswersContext.Provider
      value={{
        userAnswers,
        setUserAnswers,
        handleAnswerTest,
      }}
    >
      {children}
    </AnswersContext.Provider>
  );
};

export default AnswersProvider;
