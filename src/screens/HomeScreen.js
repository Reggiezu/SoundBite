import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({ spotifyToken }) => {
  return (
    <View>
      <Text>Welcome to SoundBite!</Text>
      <Text>Spotify Token: {spotifyToken ? 'Fetched' : 'Not Fetched'}</Text>
      {/* Add your Apple Music and Spotify related components here */}
    </View>
  );
};

export default HomeScreen;
