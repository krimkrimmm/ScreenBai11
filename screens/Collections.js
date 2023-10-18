import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

function Collections() {
  return (
    <View style={styles.container}>
           <View style={styles.houses}>
                 <ImageBackground source={require('../assets/anh2.png')} style={{width:400, height:120,marginLeft: 15, marginTop:10, resizeMode: 'cover',}}> 
                  <Text style={styles.text}>Houses</Text>
                 </ImageBackground>

           </View>
           <View style={styles.houses}>
                 <ImageBackground source={require('../assets/anh3.png')} style={{width:400, height:120,marginLeft: 15, marginTop:10, resizeMode: 'cover',}}> 
                  <Text style={styles.text}>Apartments</Text>
                 </ImageBackground>

           </View>
           <View style={styles.houses}>
                 <ImageBackground source={require('../assets/anh4.png')} style={{width:400, height:120,marginLeft: 15, marginTop:10, resizeMode: 'cover',}}> 
                  <Text style={styles.text}>Condos</Text>
                 </ImageBackground>

           </View>
           <View style={styles.houses}>
                 <ImageBackground source={require('../assets/anh5.png')} style={{width:400, height:120,marginLeft: 15, marginTop:10, resizeMode: 'cover',}}> 
                  <Text style={styles.text}>Land</Text>
                 </ImageBackground>

           </View>
           <View style={styles.houses}>
                 <ImageBackground source={require('../assets/anh6.png')} style={{width:400, height:120,marginLeft: 15, marginTop:10, resizeMode: 'cover',}}> 
                  <Text style={styles.text}>Buildings</Text>
                 </ImageBackground>

           </View>
           <View style={styles.houses}>
                 <ImageBackground source={require('../assets/anh6.3.png')} style={{width:400, height:120,marginLeft: 15, marginTop:10, resizeMode: 'cover',}}> 
                  <Text style={styles.text}>Town Houses</Text>
                 </ImageBackground>

           </View>
           
    </View>
  );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 45,
      },
});
export default Collections;