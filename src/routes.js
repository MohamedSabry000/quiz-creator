import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

const QuizAppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default QuizAppRoutes