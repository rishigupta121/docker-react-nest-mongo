import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

interface IAppProps {}

const IApp: React.FunctionComponent<IAppProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="quiz" element={<Quiz />} />
            </Routes>
        </BrowserRouter>
    );
};

export default IApp;
