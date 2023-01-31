import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { QuizContext } from '../context/quiz'
import Notfound from './notfound'
import QuestionsView from '../components/QuestionsView'

function Quiz() {
  const { quizzes } = useContext(QuizContext)
  const { quizId } = useParams()
  const origin = window.location.origin

  const [quiz, setQuiz] = useState(false)

  useEffect(() => {
  const tempQuiz = quizzes.find((quiz) => quiz.id == quizId)
  if (tempQuiz) {
    setQuiz(tempQuiz)
  }
  }, [quizzes, quizId])

  return quiz? (
      <div>
          <Helmet title={`Quiz ${quizId}`} />

          <main className="quiz  mb-24">
            <h1 className='text-3xl font-bold text-center underline tracking-wider m-6 !mb-2' >Quiz {quizId} ({quiz.title})</h1>
            <div className='flex justify-center items-center text-sm md:text-base text-justify m-6 !mt-2'>
              {quiz.description}
            </div>
              
            {
              quiz.url ? (
                <ReactPlayer 
                  url={`${quiz.url}&showinfo=0&enablejsapi=1&origin=${origin}`}
                  width='100%'
                  fallback={<div className='text-center text-xl font-bold m-6'>No Video</div>}
                  onError={() => <div className='text-center text-xl font-bold m-6'>No Video</div>}
                />
              ) : (
                <div className='text-center text-xl font-bold m-6'>No Video</div>
              )
            }

            <QuestionsView quiz={quiz} />
            <Footer />
          </main>
      </div>
    ) : (
      <Notfound />
    )
}

export default Quiz