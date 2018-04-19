/*jshint esversion: 6 */
import React from 'react';
import { View, Text } from 'react-native';

//functional component
const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  )
};

export default AlbumDetail;
