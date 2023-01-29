// const { isSearchOpen, searchValue, setSearchValue, toggleOpenSearch } = useContext(GeneralsContext) as GeneralsContextProps;
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';

const QuizAppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default QuizAppRoutes