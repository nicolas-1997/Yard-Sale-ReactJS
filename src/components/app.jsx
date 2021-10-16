import React from 'react'
import '../style/global.scss'
import Layaut from '../containers/Layout'
import Login from '../containers/Login'
const App = () => {
    return (
        <Layaut>
            <Login/>
        </Layaut>
    );
}

export default App;