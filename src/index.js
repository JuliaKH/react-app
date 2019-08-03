import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Clock from './Clock'
import './index.css'

// let tick = () => {
//     ReactDOM.render(
//         <Clock />,
//         document.getElementById('root'));
// };
// setInterval(tick, 1000);

ReactDOM.render(<App />, document.getElementById('root'));
