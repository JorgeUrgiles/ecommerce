import { View, Text, ScrollView,Image,StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import banner from '../assets/img/banner.jpg'


export default function MiCuentaScreen() {
    const imageUrl='https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png';
  return (
    <ScrollView>
    <View style={styles.container}>
  
      <Image source={{uri:imageUrl}}style={styles.perfil}/>
      <View>
      <Text style={styles.text}> USUARIO:</Text>

      <Text style={styles.text}> RICK SANCHEZ</Text>
      </View>
      
    </View>

    <View style={styles.iconosContainer}>
    <View style={styles.icono1}>
      <MaterialIcons name="favorite-outline" size={34} color="black" marginLeft={30} />
      <Text style={styles.texticon}>Lista de deseos</Text>
      </View>

      <View style={styles.iconos}>
      <Feather name="star" size={34} color="black" marginLeft={17}/>
      <Text style={styles.texticon}>Siguiendo</Text>
      </View>

      <View style={styles.iconos}>
      <MaterialIcons name="history" size={37} color="black" marginLeft={7}/>
      <Text style={styles.texticon}>Historial</Text>
      </View>

      <View style={styles.iconos}>
      <Feather name="percent" size={34} color="black" marginLeft={12} />
      <Text>Cupones</Text>
      </View>

    </View>
    
    <View style={styles.container}>
      <Text style={styles.textP} >Pedidos</Text>
      <Text style={styles.text2}>Ver todo</Text>
    </View>

    <View style={styles.iconosContainer}>
    <View style={styles.icono1}>
    <FontAwesome name="dollar" size={27} color="black" marginLeft={30} />
      <Text style={styles.texticon}>Pendientes</Text>
      <Text style={styles.texticon}> de pago</Text>

      </View>
      <View style={styles.iconos}>
      <FontAwesome5 name="dolly-flatbed" size={27} color="black" marginLeft={19} />
      <Text style={styles.texticon}>Pendientes</Text>
      <Text style={styles.texticon}> de envio</Text>

      </View>
      <View style={styles.iconos}>
      <MaterialIcons name="local-shipping" size={38} color="black" marginLeft={9} />
      <Text style={styles.texticon}>Enviado</Text>
      </View>

      <View style={styles.iconos}>
      <Ionicons name="checkbox-outline" size={38} color="black" marginLeft={20} />
      <Text>Pendientes</Text>
      <Text>de valoració</Text>
      </View>
    </View>
    
    <View style={styles.iconosContainer2}>
      <Text style={styles.containertxt}>Disputa abierta</Text>
      <Image source={banner} style={styles.banner}/>
    </View>

   <View  style={styles.container}>
    <Text style={styles.textP} >Monedero</Text>
    </View>
    <View style={styles.iconosContainer}>
    <View style={styles.icono1}>
    <FontAwesome5 name="money-bill-alt" size={34} color="black" />
      <Text style={styles.texticon}>Consigue 20$</Text>
      
      </View>
      <View style={styles.iconos}>
      <Feather name="star" size={34} color="black" marginLeft={17}/>
      <Text style={styles.texticon}>Tarjetas</Text>
      </View>
      <View style={styles.iconos}>
      <MaterialIcons name="history" size={37} color="black" marginLeft={7}/>
      <Text style={styles.texticon}>Bonus de</Text>
      <Text style={styles.texticon}>grupo</Text>
      </View>
      <View style={styles.iconos}>
      <Feather name="gift" size={34} color="black" />
      <Text>Promocion</Text>
      </View>
    </View>
    <View style={styles.footer}>
      <Text style={styles.text3}>Invitacion a amigos</Text>
    </View>
   
    </ScrollView>
   
    
  )
}
const styles=StyleSheet.create({
  container: {
    marginTop:20,
    flexDirection:'row',
    marginBottom:10
    
  },
  
  containertxt: {
    marginTop:20,
    marginBottom:10,
    fontSize:20,
    fontWeight:'bold',
    marginLeft:10,
    
  },
  iconosContainer:{
    flexDirection:'row',
    marginBottom:10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3, // Solo para Android, agrega sombra
    shadowColor: '#000', // Solo para iOS, agrega sombra
    shadowOffset: { width: 1, height: 1 }, // Solo para iOS, agrega sombra
    shadowOpacity: 0.3, // Solo para iOS, agrega sombra
    shadowRadius: 2, // Solo para iOS, agrega sombra
    
  },
  iconosContainer2:{

    marginBottom:10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3, // Solo para Android, agrega sombra
    shadowColor: '#000', // Solo para iOS, agrega sombra
    shadowOffset: { width: 1, height: 1 }, // Solo para iOS, agrega sombra
    shadowOpacity: 0.3, // Solo para iOS, agrega sombra
    shadowRadius: 2, // Solo para iOS, agrega sombra
    
  },
  perfilContainer:{borderRadius:1000
  },
  perfil:{
      width: 100,
      height: 100,
      resizeMode: 'contain',
      borderRadius:50,
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
      fontSize: 25,
      color: 'black',
      textAlign: 'center',
      fontWeight:'bold'
      
  },
  text1: {
      fontSize: 20,
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
      margin: 20
      
  },
  texticon:{
    marginRight:30
  },
  icono1:{
    margin:5
  },
  iconos:{
    margin:5
  },
  textP:{
    marginLeft:10,
    fontSize:20,
    fontWeight:'bold'
  },
  text2:{
   marginLeft:'57%',
   fontSize:20,
   fontWeight:'bold'
  },
  text3:{
    fontSize:20,
    fontWeight:'bold'
  },
  footer:{
    marginTop:'5%',
    marginLeft:10
   
  },
  banner:{
    width:415,
    height:100,
    borderRadius:25
  }



})