## Install
```bash
$ git clone https://github.com/joefraley/npm-link-webpack-demo.git
$ cd component-library && npm i
$ cd ../client && npm i && npm link ../component-library #the magic
```

## Run
### Terminal 1
```bash
$ cd client && npm start
$ open http://localhost:8080 # the consumer
```

### Terminal 2
```bash
$ cd component-library && npm start
$ open http://localhost:8081 # the playground, who is of course also a consumer
```

## Test
1. Open `component-library/src/components/message/index.js`.
2. Change text.
3. See text change in both repos.
4. Same for styles.

## How it Works
### Webpack
```javascript
// ./component-library/webpack.config.js
// I build the component library for consumption
  {
    entry: './src/components/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'components.js',
      libraryTarget: 'commonjs-module'
  },

  // ./component-library/webpack.dev.js
  // I build the development sandbox at the same time.
  {
    entry: './src/playground/index.js',
    output: {
      filename: 'bundle.js',
  },

// ./client/src/index.js
import React from 'react';
import {render} from 'react-dom';
import {Heading, Message} from 'component-library'; // during dev this is consumed from the npm link

render(
  <div>
    <Heading>Hey</Heading>
    <Message />
  </div>,
  document.body
);
```

## Notes
### webpack-dev-server
She's smart. She picks a different port for everyone automatically. No need to manage it by hand.
