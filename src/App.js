import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MusicKitWebView from './components/MusicKitWebView';
import { getSpotifyToken } from './services/spotify';

const Stack = createStackNavigator();

const App = () => {
  const [spotifyToken, setSpotifyToken] = useState('');

  useEffect(() => {
    const fetchSpotifyToken = async () => {
      try {
        const token = await getSpotifyToken();
        setSpotifyToken(token);
      } catch (error) {
        console.error('Error fetching Spotify token:', error);
      }
    };

    fetchSpotifyToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen {...props} spotifyToken={spotifyToken} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
      <MusicKitWebView />
    </NavigationContainer>
  );
};

export default App;
