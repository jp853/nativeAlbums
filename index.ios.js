  /*jshint esversion: 6 */

 import React from 'react';
 import { AppRegistry } from 'react';
 import Header from './src/component/header';

const App = () => (
  <Header />
);

AppRegistry.registerComponent('albums', () => App);
