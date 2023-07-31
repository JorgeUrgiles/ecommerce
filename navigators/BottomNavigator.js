import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer}from '@react-navigation/native';
import InicioScreen from '../screens/InicioScreen';
import CategoriasScreen from '../screens/CategoriasScreen';
import CestaScreen from '../screens/CestaScreen';
import MiCuentaScreen from '../screens/MiCuentaScreen';
import { Feather } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
      <Tab.Navigator initialRouteName='InicioTab'>
        <Tab.Screen name="InicioTab" component={InicioScreen} 
        options={{
            tabBarLabel:'Inicio',
            tabBarIcon: ()=>(
                <Feather name="home" size={24} color="black" />
            ),
            headerTitle:'Inicio'
        }}/>
        <Tab.Screen name="Categoriastab" component={CategoriasScreen} 
        options={{
            tabBarLabel:'Categorias',
            tabBarIcon: ()=>(
                <SimpleLineIcons name="tag" size={24} color="black" />
            ),
            headerTitle:'Categorias'
        }}/>
        <Tab.Screen name="CestaTab" component={CestaScreen}
        options={{
            tabBarLabel:'Cesta',
            tabBarIcon:()=>(
                <AntDesign name="shoppingcart" size={24} color="black" />
            ),
            headerTitle:'Cesta'
                    }}/>
        <Tab.Screen name="MiCuentaTab" component={MiCuentaScreen}
        options={{
            tabBarLabel:'Mi Cuenta',
            tabBarIcon:()=>(
                <AntDesign name="user" size={24} color="black" />
            ),
            headerTitle:'Mi Cuenta'
        }}
        />
      </Tab.Navigator>
    );
  }

  export default function BottomNavigation() {
   
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}