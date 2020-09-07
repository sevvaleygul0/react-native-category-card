import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import CategoryCard from './lib/categoryCard/CategoryCard';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        imageContainerBackgroundColor: '#dede44',
      }}>
      <CategoryCard />
    </View>
  );
};

export default App;
