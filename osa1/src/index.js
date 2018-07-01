import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
  }

  asetaArvoon = (arvo) => () => this.setState({ counter: arvo })

  render() {
    return (
      <div>
        <Display counter={this.state.counter} />
        <div>
          <Button
            handleClick={this.asetaArvoon(this.state.counter+1)}
            text='plus'
          />
          <Button
            handleClick={this.asetaArvoon(this.state.counter-1)}
            text='Minus'
          />
          <Button
            handleClick={this.asetaArvoon(0)}
            text="zero"
          />
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
