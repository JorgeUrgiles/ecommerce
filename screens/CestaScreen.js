import { View, Text,StyleSheet,FlatList,Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import carrito from '../assets/data/carrito.json'

export default function CestaScreen() {

    const renderItem = ({ item }) => {
        return (
          <View style={styles.productoContainer}>
            <Image source={{uri:item.imagen}} style={styles.imagenProducto} />
            <Text>{item.nombre}</Text>
            <Text>Precio: ${item.precio}</Text>
          </View>
        );
      };
  return (
    <ScrollView nestedScrollEnabled={true}>
    <View>
    
      <Text style={styles.text1}>Usuario: {carrito.usuario}</Text>
      <View>
    
      <FlatList
        data={carrito.productos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text>Subtotal: {carrito.subtotal}</Text>
      <Text>Descuento: {carrito.descuento}</Text>
      <Text>Envio: {carrito.envio}</Text>
      <Text>Total: {carrito.total}</Text>
      </View>
      <View style={styles.btnView}>
      <TouchableOpacity
                style={styles.btn}
                
                >
                <Text style={styles.text}>Acepar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btn1}
                 >
                <Text style={styles.text}>Cancelar</Text>
            </TouchableOpacity>
      </View>
      

    </View>

    </ScrollView>
   
  )
}const styles = StyleSheet.create({
    productoContainer: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    imagenProducto: {
       width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    btnView:{
        marginTop:10,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    text1:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    btn:{
        marginRight: 10,
        width: '30%',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        
    },
    btn1:{
        marginRight: 10,
        width: '30%',
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        
    }
  });