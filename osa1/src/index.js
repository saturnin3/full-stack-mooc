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
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <div>
          <button onClick={() => this.setState({ counter: this.state.counter + 1})}>
            plus
          </button>
          <button onClick={() => this.setState({ counter: 0})}>
            zero
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

//ReactDOM.render(<App counter={counter} />, document.getElementById('root'));
//registerServiceWorker();
