import { useState, useMemo, createContext } from 'react'

export const QuizContext = createContext({
    quizzes: [],
    addToQuizzes: (quiz) => {},
    removeFromQuizzes: (id) => {},
    updateQuiz: (id) => {},
  })

export const QuizProvider = ({ children }) => {
    const [quizzes, setQuizzes] = useState([]);

    const addToQuizzes = (quiz) => {
        setQuizzes([...quizzes, quiz]);
    }

    const removeFromQuizzes = (id) => {
        setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
    }

    const updateQuiz = (id) => {
        setQuizzes(quizzes.map((quiz) => quiz.id === id ? { ...quiz, completed: !quiz.completed } : quiz));
    }

    const value = useMemo(() => ({
      quizzes,
      addToQuizzes,
      removeFromQuizzes,
      updateQuiz
    }), [quizzes])

    return <QuizContext.Provider value={value}>
      { children }
    </QuizContext.Provider>
};