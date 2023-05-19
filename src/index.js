import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StraipsniaiProvider } from './contexts/StraipsniaiContext';
import { TemosProvider } from './contexts/TemosContext';
import { QuestionsProvider } from './contexts/QuestionsContext';
import { UsersProvider } from './contexts/UsersContext';
import { AnswersProvider } from './contexts/AnswersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AnswersProvider>
        <UsersProvider>
            <QuestionsProvider>
                <TemosProvider>
                    <StraipsniaiProvider>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </StraipsniaiProvider>
                </TemosProvider>
            </QuestionsProvider>
        </UsersProvider>
    </AnswersProvider>
);
