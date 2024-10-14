import React from 'react';
import { Counter } from './redux/counter/Counter';
import ExampleComponent from './axiosInstance/ExampleComponent';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import NoPage from './pages/NoPage';

const App = () => {
    return (
        <>
             <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path='/axios' element={<ExampleComponent/>} />
                    <Route path="*" element={<NoPage/>} />
                    <Route path='/counter'  element={<Counter/>} />
                </Routes>
            </Router>
        </>
    )
}
export default App;