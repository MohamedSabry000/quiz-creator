import { useState, useMemo, createContext } from 'react'
import { toast } from 'react-toastify';
import quizSample from '../data/quizSample.json'

const newQuizObject = {
  title: '',
  description: '',
  url: '',
  questions_answers: []
}

export const QuizContext = createContext({
  quizzes: [],
  addToQuizzes: () => {},
  removeFromQuizzes: () => {},
  updateQuiz: () => {},

  newQuiz: {},
  setTheNewQuiz: () => {},
  clearTheNewQuiz: () => {},
  updateTheNewQuiz: () => {},
  removeQuestionFromTheNewQuiz: () => {},
  validateTheNewQuiz: () => {},

  newQuizState: 'new',
  clearTheNewQuizState: () => {},
  updateTheNewQuizState: () => {},

  newQuizQuestionState: 'new',
  clearTheNewQuizQuestionState: () => {},
  updateTheNewQuizQuestionState: () => {}
  })

export const QuizProvider = ({ children }) => {
    const [quizzes, setQuizzes] = useState([quizSample]);
    const [newQuiz, setNewQuiz] = useState({...newQuizObject, id: quizzes.length + 1 });
    const [newQuizState, setNewQuizState] = useState("new")
    const [newQuizQuestionState, setNewQuizQuestionState] = useState("new")
    // handle Quizzes
    const addToQuizzes = () => {
        clearTheNewQuiz()
        clearTheNewQuizState()
        clearTheNewQuizQuestionState()
        setQuizzes([...quizzes, newQuiz]);
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

    const validateTheNewQuiz = () => {
      if(newQuiz.title === '') {
        toast.error('Please add a title')
        return false
      }
      if(newQuiz.description === '') {
        toast.error('Please add a description')
        return false
      }
      if(newQuiz.url === '') {
        toast.error('Please add a url')
        return false
      }
      if(newQuiz.questions_answers.length < 1) {
        toast.error('Please add at least one question')
        return false
      }
      return true
    }

    const removeQuestionFromTheNewQuiz = (q) => {
      setNewQuiz({
        ...newQuiz,
        questions_answers: newQuiz.questions_answers.filter(question => question.id+'' !== q.id+'')
      })
    }

    // handle newQuizState
    const clearTheNewQuizState = () => {
      setNewQuizState("new");
    }

    const updateTheNewQuizState = (state) => {
      setNewQuizState(state);
    }

    // handle newQuizQuestionState
    const clearTheNewQuizQuestionState = () => {
      setNewQuizQuestionState("new");
    }

    const updateTheNewQuizQuestionState = (state) => {
      setNewQuizQuestionState(state);
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
      validateTheNewQuiz,

      newQuizState,
      clearTheNewQuizState,
      updateTheNewQuizState,

      newQuizQuestionState,
      clearTheNewQuizQuestionState,
      updateTheNewQuizQuestionState
    }), [quizzes, newQuiz, newQuizQuestionState])

    return <QuizContext.Provider value={value}>
      { children }
    </QuizContext.Provider>
};