import React from 'react';
import { View, Text,StyleSheet, Image, FlatList,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Saved({ navigation }) {

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
  ];
  const icons2 = [
   
    'star',
    'star',
    'star',
    'star',
    'star-o',
  ];
  const icons3 = [
   
    'star',
    'star',
    'star',
    'star-o',
    'star-o',
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.saved}>
        <View style={styles.savedImage}>
                <View style={{marginLeft:10}}>
                    <Image source={require('../assets/anh6.1.png')} style={{width:180, height:180}}/>
                    <Icon name="heart" size={30} color="green" style={styles.iconproduct}/>               
                    <Text style={{fontSize:'16',fontWeight:'bold'}}>One Misson Bay {'\n'}</Text>
                    <Text>San Francsico, CA {'\n'}</Text>
                        <FlatList
                        data={icons}
                        renderItem={renderIcon}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        />
                </View>
                <View style={{marginLeft: 10}}>
                    <Image source={require('../assets/anh2.png')} style={{width:180, height:180}}/>
                    <Icon name="heart" size={30} color="green" style={styles.iconproduct}/>
                    <Text style={{fontSize:'16',fontWeight:'bold'}}>1410 Steniner St  {'\n'}</Text>
                    <Text>San Francsico, CA {'\n'}</Text>
                       <FlatList
                        data={icons}
                        renderItem={renderIcon}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        />
                </View>
               
            </View>
            <View style={styles.savedImage2}>
            <View style={{marginLeft:10}}>
                    <Image source={require('../assets/anh3.png')} style={{width:180, height:180}}/>
                    <Icon name="heart" size={30} color="green" style={styles.iconproduct}/>               
                    <Text style={{fontSize:'16',fontWeight:'bold'}}>246  Sussex St {'\n'}</Text>
                    <Text>San Francsico, CA {'\n'}</Text>
                        <FlatList
                        data={icons2}
                        renderItem={renderIcon}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        />
                </View>
                <View style={{marginLeft:10}}>
                    <Image source={require('../assets/anh4.png')} style={{width:180, height:180}}/>
                    <Icon name="heart" size={30} color="green" style={styles.iconproduct}/>               
                    <Text style={{fontSize:'16',fontWeight:'bold'}}>1206 Market St {'\n'}</Text>
                    <Text>San Francsico, CA {'\n'}</Text>
                        <FlatList
                        data={icons3}
                        renderItem={renderIcon}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        />
                </View>
            </View>
            <View style={styles.savedImage2}>
            <View style={{marginLeft:10}}>
                    <Image source={require('../assets/anh5.png')} style={{width:180, height:180}}/>
                    <Icon name="heart" size={30} color="green" style={styles.iconproduct}/>               
                    <Text style={{fontSize:'16',fontWeight:'bold'}}>One Misson Bay {'\n'}</Text>
                    <Text>San Francsico, CA {'\n'}</Text>
                        <FlatList
                        data={icons2}
                        renderItem={renderIcon}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        />
                </View>
                <View style={{marginLeft:10}}>
                    <Image source={require('../assets/anh6.png')} style={{width:180, height:180}}/>
                    <Icon name="heart" size={30} color="green" style={styles.iconproduct}/>               
                    <Text style={{fontSize:'16',fontWeight:'bold'}}>One Misson Bay {'\n'}</Text>
                    <Text>San Francsico, CA {'\n'}</Text>
                        <FlatList
                        data={icons3}
                        renderItem={renderIcon}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        />
                </View>
            </View>
        </View>
        </ScrollView>
    </View>
  );
}
const styles=StyleSheet.create({
  saved:{
  },

savedImage:{
    flexDirection:'row',
    marginLeft:20
},
iconproduct:{
  position: 'absolute',
  top: 10, 
  right: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
iconContainer: {
  marginRight: 5,
},
savedImage2:{
  flexDirection:'row',
  marginTop: 20,
  marginLeft: 20
},
});
export default Saved;