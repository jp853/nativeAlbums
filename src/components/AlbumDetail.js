/*jshint esversion: 6 */
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

//functional component
const AlbumDetail = (props) => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );
};

export default AlbumDetail;
