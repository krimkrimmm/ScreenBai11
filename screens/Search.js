import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyComponent = () => {
  const renderIcon = ({ item }) => (
    <View style={styles.iconContainer}>
      <Icon name={item} size={20} color="green" />
    </View>
  );

  const icons = [
   
    'star',
    'star',
    'star',
    'star',
    'star',
  
    // Thêm các icon khác tùy ý
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={icons}
        renderItem={renderIcon}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginHorizontal: 5,
  },
});

export default MyComponent;