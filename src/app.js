import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));





















// const Layout = (props) => {
//     return(
//         <div>
//             <p>Haeder</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
//     )
// };
// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// )
// ReactDOM.render(
//     <Layout>
//         <div>
//             <h1>Page Title</h1>
//             <p>This is my page</p>
//         </div>    </Layout>
// , document.getElementById('app'));