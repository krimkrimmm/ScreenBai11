import React from 'react';
import { View, Text, StyleSheet,Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.categoris}>
            <View>
                <Text style={{fontSize:20, fontWeight:'bold',margin: 20}}>Categories</Text>
            </View>
            <ScrollView horizontal='true'>
            <View style={styles.categorisImage}>
                <View style={styles.categorisImage1}>
                    <Image source={require('../assets/anh6.2.png')} style={styles.Image}/>
                    <Text style={{fontSize:'18',fontWeight:'bold',margin:10}}>Houses</Text>
                </View>
                <View style={styles.categorisImage2}>
                    <Image source={require('../assets/anh2.png')} style={styles.Image}/>   
                    <Text style={{fontSize:'18',fontWeight:'bold',margin:10}}>Apartments</Text> 
                </View>
                <View style={styles.categorisImage2}>
                    <Image source={require('../assets/anh3.png')} style={styles.Image}/>
                    <Text style={{fontSize:'18',fontWeight:'bold',margin:10}}>Condos</Text>
                </View>
            
            </View>
            </ScrollView>
        </View>
        <ScrollView>
        <View style={styles.houses}>
            <Text style={{fontSize:20, fontWeight:'bold',margin: 20}}>Houses</Text>
            <View style={styles.housesImage1}>
                <View style={{marginLeft:10}}>
                    <Image source={require('../assets/anh6.2.png')} style={{width:200, height:200}}/>
                    <Icon name="heart" size={30} color="green" style={styles.iconproduct}/>               
                    <Text style={{fontSize:'16',fontWeight:'bold'}}>One Misson Bay {'\n'}</Text>
                    <Text>San Francsico, CA</Text>
                </View>
                <View style={{marginLeft: 10}}>
                    <Image source={require('../assets/anh2.png')} style={{width:200, height:200}}/>
                    <Icon name="heart" size={30} color="white" style={styles.iconproduct}/>
                    <Text style={{fontSize:'16',fontWeight:'bold'}}>1410 Steniner St  {'\n'}</Text>
                    <Text>San Francsico, CA</Text>
                </View>
            </View>
            <View style={styles.housesImage2}>
            <View style={{marginLeft:10}}>
                    <Image source={require('../assets/anh3.png')} style={{width:200, height:200}}/>
                    <Icon name="heart" size={30} color="green" style={styles.iconproduct}/>               
                    <Text style={{fontSize:'16',fontWeight:'bold'}}>One Misson Bay {'\n'}</Text>
                    <Text>San Francsico, CA</Text>
                </View>
                <View style={{marginLeft: 10}}>
                    <Image source={require('../assets/anh4.png')} style={{width:200, height:200}}/>
                    <Icon name="heart" size={30} color="green" style={styles.iconproduct}/>
                    <Text style={{fontSize:'16',fontWeight:'bold'}}>1410 Steniner St  {'\n'}</Text>
                    <Text>San Francsico, CA</Text>
                </View>
            </View>
        </View>
        <View style={styles.content}>
            <Text style={{fontSize:'16',fontWeight:'bold',color:'green'}}>Show all(7)</Text>
        </View>
        </ScrollView>
        
    </View>
  );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    categoris:{
        
    },
    categorisImage:{
    
        flexDirection:'row'
    },
    categorisImage1:{
      width:150,
      height:150,
      borderWidth:1,
      borderRadius: 10,
      margin:20,
      borderColor:'white',
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Màu bóng (rgba)
    shadowOffset: { width: 0, height: 5 }, // Độ dịch chuyển của bóng (width, height)
    shadowOpacity: 1, // Độ mờ của bóng (0-1)
    shadowRadius: 4, // Bán kính của bóng
    },
    categorisImage2:{
        width:150,
        height:150,
        borderWidth:1,
        borderRadius: 10,
        borderColor:'gray',
        marginTop:20,
        margin:10,
        borderColor:'white',
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Màu bóng (rgba)
    shadowOffset: { width: 0, height: 5 }, // Độ dịch chuyển của bóng (width, height)
    shadowOpacity: 1, // Độ mờ của bóng (0-1)
    shadowRadius: 4, // Bán kính của bóng
      },
    Image:{
        width: 150, 
        height: 100,
        borderRadius:10
    },
    houses:{
        flex:1
    },
    housesImage1:{
        flex:1,
        flexDirection:'row'
    },
    housesImage2:{
        flexDirection:'row',
        marginTop: 20,
    },
    iconproduct:{
        position: 'absolute',
        top: 10, 
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      content:{
        width: 300,
        height: 50,
        borderWidth:1,
        borderColor:'green',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:70,
        marginTop: 30,
        borderRadius:10,
      }
});


export default HomeScreen;