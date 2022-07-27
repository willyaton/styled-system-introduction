import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Shape } from '../.';

const App = () => {
  return (
    <div>
      <Shape objectType="circle" font="gill" size="large" text="Hello World!" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
