import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

class Hello extends React.Component {
  render () {
    const {name, age} = this.props
    const bornYear = () => new Date().getFullYear() - age

    return (
      <div>
        <p>Hello {name}, you are {age} years old <br />
        So you were probably born {bornYear()}</p>
        </div>
    )
  }
}

const App = () => {
const nimi = 'Pekka'
const ika = 10
return (
  <div>
    <h1>Greetings</h1>
    <Hello name = "Arto" age={26+10}/>
    <Hello name= {nimi} age={ika}/>
  </div>
)}

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
