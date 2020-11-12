import React, { createContext, useContext, useState } from "react";

interface Props {
  children: any;
}

const AnswersContext = createContext();

export const QuestionsProvider: React.FC<Props> = ({ children }) => {
  const [userAnswers, setUserAnswers] = useState([]);

  const saveAnswer = (
    question: string,
    correct: string,
    answer: string
  ) => {
    setUserAnswers((prevState) => {
      let answersArray = prevState;
      answersArray.push({ question, correct, answer });
      return answersArray;
    });
  };

  const resetAnswers = () => setUserAnswers([]);

  return (
    <AnswersContext.Provider
      value={{
        userAnswers,
        saveAnswer,
        resetAnswers,
      }}
    >
      {children}
    </AnswersContext.Provider>
  );
};

export const useCurrentAnswers = () => useContext(AnswersContext);
