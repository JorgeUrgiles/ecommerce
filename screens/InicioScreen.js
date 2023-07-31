import { View, Text, Image,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import sudadera from '../assets/img/sudadera.jpg'
import pantalon from '../assets/img/pantalon.jpg'
import camisa from '../assets/img/camisa.jpeg'
import zapato from '../assets/img/zapato.jpg'
export default function InicioScreen({}) {
const imageUrl='https://assets.stickpng.com/images/585990604f6ae202fedf28d3.png';

  return (
    <ScrollView>
        <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a H&M - ¡Tu destino de moda!</Text>
      <Image source={{uri:imageUrl}} style={styles.logo}/>
      <Text style={styles.text1}>Descubre lo último en moda y tendencias en nuestra tienda online.</Text>
      <Text style={styles.text1}>Productos destacados:</Text>
      
      <View style={styles.containerProductos}>
      <Image source={sudadera} style={styles.productos} />
      <Image source={pantalon} style={styles.productos} />
      <Image source={camisa} style={styles.productos} />
      <Image source={zapato} style={styles.productos} />
      </View>
      
    </View>
    </ScrollView>
    
  )
}
const styles=StyleSheet.create({
    container: {

        
       
       
    },
    logo:{
        width: 200,
        height: 200,
        resizeMode: 'contain',
        alignSelf:'center'
    },
    containerProductos:{      
        alignSelf:'center'
    },
    productos:{
        width: 200,
        height: 300,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 50,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom:20
    },
    text1: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 20
        
    }


})