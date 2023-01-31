import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Quiz from './pages/quiz';


const QuizAppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="quiz/:quizId" element={<Quiz />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default QuizAppRoutes