import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'
import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

// rendering App to the root
ReactDOM.render(<App/>, document.getElementById('root'))

// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<App/>);
// }
