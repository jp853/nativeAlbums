  /*jshint esversion: 6 */

 import React from 'react';
 import { AppRegistry } from 'react';
 import Header from './src/components/Header';
 import AlbumList from './src/components/AlbumList';

const App = () => (
  <Header headerText={'Albums'}/>
);

AppRegistry.registerComponent('albums', () => App);
