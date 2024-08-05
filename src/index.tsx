import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import flagsmith from "flagsmith";
import { FlagsmithProvider } from 'flagsmith/react';


ReactDOM.render(
    <React.StrictMode>
        <FlagsmithProvider options={{environmentID: "EmuEJAXacGQEKd2XxFsAQq", api:"http://localhost:8000/api/v1/" }} flagsmith={flagsmith}>
            <App/>
        </FlagsmithProvider>
    </React.StrictMode>,
    document.getElementById('root')
);