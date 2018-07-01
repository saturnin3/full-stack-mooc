import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }

    setInterval( () => {
      this.setState({ counter: this.state.counter + 1})
    }, 1000)
  }

  render() {
    console.log('renderöidään', this.state.counter)
    return (
      <div>{this.state.counter}</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

//ReactDOM.render(<App counter={counter} />, document.getElementById('root'));
//registerServiceWorker();
