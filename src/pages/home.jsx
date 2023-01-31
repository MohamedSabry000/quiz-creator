import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Quizzes from '../components/Quizzes'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Helmet title="Home" />

        <main className="home mb-24">
            <Header />
            <Quizzes />
            <Footer />
        </main>
    </div>
  )
}

export default Home