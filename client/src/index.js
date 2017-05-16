import React from 'react';
import {render} from 'react-dom';
import {Message, Heading} from 'component-library';

const App = () => <div>
  <Heading>mywebsite.com</Heading>
  <Message />
</div>

render(<App/>, document.body);
