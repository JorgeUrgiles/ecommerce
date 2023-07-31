import { View, Text, FlatList,StyleSheet } from 'react-native'
import React from 'react'

export default function CategoriasScreen() {

    const categorias = [
        { id: '1', nombre: 'Pantalones' },
        { id: '2', nombre: 'Camisas' },
        { id: '3', nombre: 'Sudaderas' },
        { id: '4', nombre: 'Zapatos' },
        {id: '5', nombre: 'Gorras'},
        {id: '6', nombre: 'Pantalonetas'},
        {id: '7', nombre: 'Corbatas'},
        {id: '8', nombre: 'Camisetas'}
      ];
      const renderItem = ({ item }) => {
        return <Text style={styles.text1}>{item.nombre}</Text>;
      };
    
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Categorias</Text>
      <FlatList
        data={categorias}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:70
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
        marginBottom:15
    }
});