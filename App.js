/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  Text,
  FlatList
} from 'react-native';

const App: () => Node = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const data = await response.json();
      setMovies(data.movies);
    } catch (error) {
      console.log('Error', error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])
  
  return (

    <View style={{ flex:1}}>
          <FlatList
            data={movies}
            renderItem={({ item }) => (
              <Text style={{color:'red'}}>{item.title}, {item.releaseYear}</Text>
            )}
            keyExtractor={({id},index) => id}
            style={{flex:1}}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
