import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import CategoryCard from './lib/category-card/CategoryCard';

const windowWidth = Dimensions.get('window').width;

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 70,
        backgroundColor: '#fcfafc',
      }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#7a0c7a',
          width: windowWidth * 0.7,
          textAlign: 'center',
        }}>
        React Native Category Card
      </Text>
      <View style={{marginTop: 52, marginBottom: 16}}>
        <CategoryCard
          titleText="Fruit & Vegetables"
          titleColor="#4c8e9c"
          height={45}
          onPress={() => console.log('Fruits')}
        />
      </View>
      <View style={{marginBottom: 16}}>
        <CategoryCard
          titleText={'Meat & Poultry'}
          descriptionText={'Butcher'}
          count={1}
          disableRightButton
          titleColor="#E8B730"
          descriptionColor="#edd695"
          onPress={() => console.log('Meat & Poultry')}
        />
      </View>
      <View style={{marginBottom: 16}}>
        <CategoryCard
          titleText="Bakery"
          descriptionText="Bread, Cookies.."
          onPress={() => console.log('Bakery')}
        />
      </View>

      <View style={{marginBottom: 16}}>
        <CategoryCard
          titleText={'Dairy & Eggs'}
          count={4}
          gradientColors={['#D1F3FA', '#9CE5F4', '#16A9C7']}
          imageSource={require('./lib/asset/star.png')}
          onPress={() => console.log('Dairy & Eggs')}
        />
      </View>
      <View style={{marginBottom: 16}}>
        <CategoryCard
          titleText={'Pantry'}
          descriptionText="Fresh Food"
          disableRightButton
          count={8}
          gradientColors={['#E5D1FA', '#C69CF4', '#A866EE']}
          imageSource={require('./lib/asset/star.png')}
          onPress={() => console.log('Pantry')}
        />
      </View>
      <CategoryCard
        titleText={'Detergent'}
        count={2}
        disableRightButton
        disableRightImage={true}
        gradientColors={['#D1FAD7', '#9CF4A7', '#66EE78']}
        imageSource={require('./lib/asset/star.png')}
        onPress={() => console.log('Detergent')}
      />
    </View>
  );
};

export default App;
