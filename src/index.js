import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { level } from '_reducers/reducers'

import { Intro } from 'pages/Intro';

const store = createStore(level);

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Intro />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
