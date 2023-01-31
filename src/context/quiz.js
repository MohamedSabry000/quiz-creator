import { useState, useMemo, createContext } from 'react'
import quizSample from '../data/quizSample.json'

const newQuizObject = {
  title: '',
  description: '',
  url: '',
  questions_answers: []
}

export const QuizContext = createContext({
    quizzes: [],
    addToQuizzes: (quiz) => {},
    removeFromQuizzes: (id) => {},
    updateQuiz: (id) => {},
  })

export const QuizProvider = ({ children }) => {
    const [quizzes, setQuizzes] = useState([quizSample]);
    const [newQuiz, setNewQuiz] = useState({...newQuizObject, id: quizzes.length + 1 });
    const [newQuizState, setNewQuizState] = useState("new")
    // handle Quizzes
    const addToQuizzes = (quiz) => {
        setQuizzes([...quizzes, quiz]);
    }

    const removeFromQuizzes = (id) => {
        setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
    }

    const updateQuiz = (id) => {
        setQuizzes(quizzes.map((quiz) => quiz.id === id ? { ...quiz, completed: !quiz.completed } : quiz));
    }
    // handle NewQuiz
    const setTheNewQuiz = (quiz) => {
      setNewQuiz(quiz);
    }

    const clearTheNewQuiz = () => {
      setNewQuiz({...newQuizObject, id: quizzes.length + 1 });
    }

    const updateTheNewQuiz = (quiz) => {
      setNewQuiz(quiz);
    }

    const removeQuestionFromTheNewQuiz = (q) => {
      setNewQuiz({
        ...newQuiz,
        questions_answers: newQuiz.questions_answers.filter(question => question.id+'' !== q.id+'')
      })
    }

    // handle NewQuizState
    const clearTheNewQuizState = () => {
      setNewQuizState("new");
    }

    const updateTheNewQuizState = (state) => {
      setNewQuizState(state);
    }

    const value = useMemo(() => ({
      quizzes,
      addToQuizzes,
      removeFromQuizzes,
      updateQuiz,

      newQuiz,
      setTheNewQuiz,
      clearTheNewQuiz,
      updateTheNewQuiz,
      removeQuestionFromTheNewQuiz,

      newQuizState,
      clearTheNewQuizState,
      updateTheNewQuizState
    }), [quizzes, newQuiz, newQuizState])

    return <QuizContext.Provider value={value}>
      { children }
    </QuizContext.Provider>
};