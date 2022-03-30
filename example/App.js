import React from 'react';
import {View} from 'react-native';
import CategoryCard from 'react-native-category-card';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{marginBottom: 16}}>
        <CategoryCard onPress={() => console.log('Fruits')} />
      </View>
      <View style={{marginBottom: 16}}>
        <CategoryCard
          titleText="Bakery"
          disableDescriptionText={true}
          count={3}
          gradientColors={['#F4A09C', '#EE8F66', '#E83A30']}
          imageSource={require("./lib/asset/star.png")}
          onPress={() => console.log('Bakery')}
        />
      </View>
      <View style={{marginBottom: 16}}>
        <CategoryCard
          titleText={'Meat & Poultry'}
          descriptionText={'Butcher'}
          count={1}
          gradientColors={['#FAF9D1', '#EECA66', '#E8B730']}
          imageSource={require("./lib/asset/star.png")}
          onPress={() => console.log('Meat & Poultry')}
        />
      </View>
      <View style={{marginBottom: 16}}>
        <CategoryCard
          titleText={'Dairy & Eggs'}
          count={4}
          disableDescriptionText={true}
          gradientColors={['#D1F3FA', '#9CE5F4', '#16A9C7']}
          imageSource={require("./lib/asset/star.png")}
          onPress={() => console.log('Dairy & Eggs')}
        />
      </View>
      <View style={{marginBottom: 16}}>
        <CategoryCard
          titleText={'Pantry'}
          count={8}
          disableDescriptionText={true}
          gradientColors={['#E5D1FA', '#C69CF4', '#A866EE']}
          imageSource={require("./lib/asset/star.png")}
          onPress={() => console.log('Pantry')}
        />
      </View>
      <CategoryCard
        titleText={'Detergent'}
        count={2}
        disableDescriptionText={true}
        gradientColors={['#D1FAD7', '#9CF4A7', '#66EE78']}
        imageSource={require("./lib/asset/star.png")}
        onPress={() => console.log('Detergent')}
      />
    </View>
  );
};

export default App;
