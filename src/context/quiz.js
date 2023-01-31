import { useState, useMemo, createContext } from 'react'
import { toast } from 'react-toastify';
import quizSample from '../data/quizSample.json'

const getData = () => {
  const d = new Date(),
  dFormat = [ d.getFullYear(),
              d.getDate(),
              d.getMonth()+1].join('-')+' '+
            [ d.getHours(),
              d.getMinutes(),
              d.getSeconds()].join(':');
  return dFormat
}

const newQuizObject = {
  title: '',
  description: '',
  url: '',
  questions_answers: []
}

export const QuizContext = createContext({
  quizzes: [],
  addToQuizzes: () => {},
  removeFromQuizzes: (id) => {},
  updateQuiz: (id) => {},
  updateScore: (id, score) => {},

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
    console.log("🚀 ~ file: quiz.js:36 ~ QuizProvider ~ quizzes", quizzes)
    const [newQuiz, setNewQuiz] = useState({...newQuizObject });
    const [newQuizId, setNewQuizId] = useState(1)
    const [newQuizState, setNewQuizState] = useState("new")
    const [newQuizQuestionState, setNewQuizQuestionState] = useState("new")
    // handle Quizzes
    const addToQuizzes = () => {
        const now = getData()
        setQuizzes([
          ...quizzes, 
          {
            ...newQuiz, 
            id: newQuizId, 
            created: now,
            modified: now,
            score: null
          }
        ]);
        setNewQuizId(newQuizId + 1)
        clearTheNewQuiz()
        clearTheNewQuizState()
        clearTheNewQuizQuestionState()
    }

    const removeFromQuizzes = (id) => {
        setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
    }

    const updateQuiz = (id) => {
        const now = getData()
        setQuizzes(quizzes.map((q) => 
          (q.id === id ? {...newQuiz, modified: now} : q))
        );
    }

    const updateScore = (id, score) => {
      setQuizzes(quizzes.map((q) =>
        (q.id === id ? {...q, score: score} : q))
      );
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

    const validateYouTubeUrl = (urlToParse) => {
      if (urlToParse) {
          var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
          if (urlToParse.match(regExp)) {
              return true;
          }
      }
      return false;
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
      if(!validateYouTubeUrl(newQuiz.url)) {
        toast.error('Please add a valid url')
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
      updateScore,

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